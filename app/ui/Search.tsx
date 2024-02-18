'use client'

import React from 'react'
import styles from '@/app/sideBar.module.css'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

/*
  TODO:

  search for name and filter NotesArray
  Set path to the id of the note
  redirect to the path
*/

function Search() {
  return (
    <input 
      className={styles.search}
      type="text" 
      placeholder='Search... (coming soon)'
      name='search'
      autoComplete='off'
    />
  )
}

export default Search