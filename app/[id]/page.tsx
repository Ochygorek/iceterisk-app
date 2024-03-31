'use client'

import React from 'react'
import Editor from '../ui/editor/Editor';
import NotFound from '../ui/NotFound';
import { getItemFromLocalStorage, getNameFromLocalStorage } from '@/noteActions/notesPage';
import styles from '@/app/main.module.css'

export default function Page({ params }: { params: { id: string } }) {
  const id: string = params.id;
  const lid = getItemFromLocalStorage(id);
  const name = getNameFromLocalStorage(id);

  if (!lid) {
    return <NotFound />;
  }

  return (
    <>
      <span className={styles.pageName}>{name}</span>
      <Editor editorId={id}></Editor>
    </>
  )
}