"use client"

import React, { Suspense, useState } from 'react'
import styles from '../sideBar.module.css'
import ButtonSkeleton from './skeletons/ButtonSkeleton'
import { addNote } from '@/noteActions/notesArray'

function AddNoteButton(prop: any) {
  const { setUpdate } = prop

  function handleClick() {
    addNote()
    setUpdate((prev: any) => (prev + 1))
  }

  return (
    <Suspense fallback={<ButtonSkeleton />}>
      <button className={styles.noteButton} onClick={handleClick}>New Note</button>
    </Suspense>
  )
}

export default AddNoteButton