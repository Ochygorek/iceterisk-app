'use client'

import React, { Suspense, useState } from 'react'
import Search from './Search'
import AddNoteButton from './AddNoteButton'
import User from './User'
import styles from '@/app/SideBar.module.css'
import Image from 'next/image'
import NotesArray from './NotesArray'
import Settings from './Settings'
import NotesSkeleton from './skeletons/NotesSkeleton'

function SideBar() {
  const [update, setUpdate] = useState<number>(0)

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.searchContainer}>
        <Image 
        src='/search.svg'
        alt='Search Icon'
        width={16}
        height={16}
        />
        <Search />
      </div>
      <div className={styles.notesSideBarContainer}>
        <Suspense fallback={<NotesSkeleton />}>
          <NotesArray update={update} setUpdate={setUpdate} />
        </Suspense>
      </div>
      <div className={styles.noteButtonContainer}>
        <AddNoteButton setUpdate={setUpdate}/>
      </div>
      <div className={styles.userAndOptions}>
        <User />
        <Settings />
      </div>
    </div>
  )
}

export default SideBar