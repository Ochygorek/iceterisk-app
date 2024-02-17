'use client'

import styles from '@/app/editor.module.css'

import { useEffect, useRef, useState } from "react";
import { createCommand, LexicalCommand } from "lexical";
import { computePosition } from "@floating-ui/dom";
import { LinkNode } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { debounce } from "../utils/debounce";
import { IconButton } from "../IconButton/IconButton";

type OpenLinkMenuPosition = { x: number; y: number } | undefined;

export const LINK_SELECTOR = `[data-lexical-editor] a`;
export const OPEN_LINK_MENU_ID = "open-link-menu";
export const TOGGLE_EDIT_LINK_MENU: LexicalCommand<undefined> = createCommand();

export function OpenLinkPlugin() {
  const ref = useRef<HTMLDivElement>(null);
  const linkSetRef = useRef<Set<string>>(new Set());

  const [copied, setCopied] = useState(false);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [pos, setPos] = useState<OpenLinkMenuPosition>(undefined);
  const [link, setLink] = useState<string | null>(null);

  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const menu = (e.target as HTMLElement).closest<HTMLElement>(
        `#${OPEN_LINK_MENU_ID}`
      );
      if (menu) return;

      const link = (e.target as HTMLElement).closest<HTMLElement>(
        LINK_SELECTOR
      );

      if (!link || !ref.current) {
        setPos(undefined);
        setLink(null);
        return;
      }

      computePosition(link, ref.current, { placement: "bottom" })
        .then((pos) => {
          setPos({ x: pos.x, y: pos.y + 10 });
          setLink(link.getAttribute("href"));
        })
        .catch(() => {
          setPos(undefined);
        });

      return true;
    };

    const debouncedMouseMove = debounce(handleMouseMove, 200);

    const mutationListener = (mutations: Map<string, string>) => {
      const mutationsArray = Array.from(mutations.entries());

      let linkNodesExist = false;

      for (const [key, type] of mutationsArray) {
        if (type === "created" || type === "updated") {
          linkSetRef.current.add(key);
          linkNodesExist = true;
        } else if (type === "destroyed") {
          linkSetRef.current.delete(key);
        }
      }

      if (linkNodesExist) {
        document.addEventListener("mousemove", debouncedMouseMove);
      } else {
        document.removeEventListener("mousemove", debouncedMouseMove);
        setPos(undefined);
        setLink(null);
      }
    };

    const unsubscribe = editor.registerMutationListener(LinkNode, mutationListener);

    return () => {
      unsubscribe();
      document.removeEventListener("mousemove", debouncedMouseMove);
    };
  }, [editor]);

  return (
    <div
      id={OPEN_LINK_MENU_ID}
      ref={ref}
      style={{ top: pos?.y, left: pos?.x, width }}
      aria-hidden={!pos?.x || !pos?.y}
      className={`${styles.openLinkContainerVisual} ${
        pos?.x && pos?.y ? "opacity-1 visible" : "opacity-0 invisible"
      }`}
    >
      {link && !copied ? (
        <a
          className={`${styles.openLinkText} cursor-pointer`}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link}
        </a>
      ) : (
        <span className="w-full text-xs text-center opacity-75 cursor-pointer">
          {copied ? "🎉 Copied!" : "No link"}
        </span>
      )}
      {link ? (
        <IconButton
          icon="copy"
          onClick={() => {
            navigator.clipboard.writeText(link);
            setCopied(true);
            setWidth(ref.current?.getBoundingClientRect().width);
            setTimeout(() => {
              setCopied(false);
              setWidth(undefined);
            }, 1000);
          }}
        />
      ) : undefined}
    </div>
  );
}
