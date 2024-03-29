'use client'

import React, { Suspense, useState } from 'react'
import Search from './Search'
import AddNoteButton from './AddNoteButton'
import User from './User'
import styles from '@/app/sideBar.module.css'
import Image from 'next/image'
import NotesArray from './NotesArray'
import Settings from './Settings'
import NotesSkeleton from './skeletons/NotesSkeleton'

function SideBar() {
  const [update, setUpdate] = useState<number>(0)

  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.searchContainer}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.1898 5.84492C11.1898 8.79685 8.79678 11.1898 5.84488 11.1898C2.89299 11.1898 0.5 8.79685 0.5 5.84492C0.5 2.893 2.89299 0.5 5.84488 0.5C8.79678 0.5 11.1898 2.893 11.1898 5.84492Z" stroke="#888888"/>
          <rect width="1.46123" height="8.76736" transform="matrix(0.707104 -0.707109 0.707104 0.707109 8.76758 9.80054)" fill="#888888"/>
        </svg>

        {/* <Image 
          src='/search.svg'
          alt='Search Icon'
          width={16}
          height={16}
        /> */}
        <Search />
      </div>
      <div className={styles.notesSideBarContainer}>
        {/* <Suspense fallback={<NotesSkeleton />}> */}
          <NotesArray update={update} setUpdate={setUpdate} />
        {/* </Suspense> */}
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