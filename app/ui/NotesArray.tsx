import React, { Suspense, useState } from 'react'
import styles from '@/app/sideBar.module.css'
import Note from './Note'
import NotesSkeleton from './skeletons/NotesSkeleton'

function NotesArray(prop: any) {
  // notes
  return (
    <div className={styles.notesSideBar}>
      {/* <Suspense fallback={<NotesSkeleton />}> */}
        <Note update={prop.update} setUpdate={prop.setUpdate} toggleFunction={prop.toggleFunction} />
      {/* </Suspense> */}
    </div>
  )
}

export default NotesArray