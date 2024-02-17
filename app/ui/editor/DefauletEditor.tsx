'use client'

import React, { Suspense, useEffect } from 'react'
import styles from './editor.module.css'

import {$getRoot, $getSelection} from 'lexical';

import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { LinkNode } from "@lexical/link";
import { CodeNode } from "@lexical/code";

import { TRANSFORMERS } from "@lexical/markdown";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";

import { ActionsPlugin } from '@/app/Lexical/plugins/actions';
import { isValidUrl } from "@/app/Lexical/utils/urls";
import { AutoLinkPlugin } from "@/app/Lexical/plugins/AutoLink";
import { EditLinkPlugin } from "@/app/Lexical/plugins/EditLink";
import { FloatingMenuPlugin } from "@/app/Lexical/plugins/FloatingMenu";
import { LocalStoragePlugin } from "@/app/Lexical/plugins/LexicalLocalStorage";
import { OpenLinkPlugin } from "@/app/Lexical/plugins/OpenLink";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { AutoLinkNode } from "@lexical/link";

import {
  EditorHistoryStateContext,
  useEditorHistoryState,
} from "@/app/Lexical/context/EditorHistoryState";
import EditorSkeleton from '@/app/ui/skeletons/EditorSkeleton';
import Image from 'next/image';

/*
  TODO:

  retrieve the props from the page with id
  make it work...

  name change based on rename Note
  local storage get based on id insted of name
*/

type LexicalEditorProps = {
  config: Parameters<typeof LexicalComposer>["0"]["initialConfig"];
};

const lexicalNodes = [
  AutoLinkNode,
  CodeNode,
  HeadingNode,
  LinkNode,
  ListNode,
  ListItemNode,
  QuoteNode,
];

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

function onError(error : any) {
  console.error(error);
}

/*
  find things from local storage based on id

  -> pass in notes id and name for the note
*/

const name = 'MyEditor'
const id = 'myId'

const initialConfig = {
  id: id,
  namespace: name,
  onError,
  nodes: lexicalNodes,
  theme: {
    root: styles.root,
    link: styles.link,
    text: {
      bold: styles.bold,
      underline: styles.underline,
      italic: styles.italic,
      strikethrough: styles.strikethrough,
    },
  },
};


function LexicalEditor(props: LexicalEditorProps) {
  const { historyState } = useEditorHistoryState();

  return (
    <div className={styles.containerTinymce}>
      <Suspense fallback={<EditorSkeleton />}>
        <LexicalComposer initialConfig={props.config}>
          
          <ActionsPlugin />

          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={<div className={styles.plaveholderDiv}><Image src='/editorplaceholder.svg' alt='Placeholder image for editor window' width={128} height={128}></Image></div>}
            ErrorBoundary={LexicalErrorBoundary}
          />

          <LocalStoragePlugin namespace={initialConfig.id} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <HistoryPlugin externalHistoryState={historyState} />
          <EditLinkPlugin />
          <FloatingMenuPlugin />
          <OpenLinkPlugin />
          <ListPlugin />
          <LinkPlugin validateUrl={isValidUrl} />
          <AutoLinkPlugin />

        </LexicalComposer>
      </Suspense>
    </div>
  )
}

export default Editor

const content = typeof window !== 'undefined' ? localStorage.getItem(initialConfig.id) : null;

console.log('content from page', content)

export function Editor() {

  return (
    <div className={styles.props}>
      <EditorHistoryStateContext>
        <LexicalEditor
          config={{
            ...initialConfig,
            editorState: content,
          }}
        />
      </EditorHistoryStateContext>
    </div>
  );
}