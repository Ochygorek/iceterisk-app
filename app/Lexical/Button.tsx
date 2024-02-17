'use client'

import { ComponentProps } from "react";
import styles from '../editor.module.css'

type ButtonProps = {
  children?: JSX.Element;
} & ComponentProps<"button">;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={styles.mainButton}
      {...props}
    >
      {children}
    </button>
  );
}