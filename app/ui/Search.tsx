'use client'

import React from 'react'
import styles from '../SideBar.module.css'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

/*
  TODO:

  search for name and filter NotesArray
  Set path to the id of the note
  redirect to the path
*/

function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <input 
      className={styles.search}
      type="text" 
      placeholder='Search... (coming soon)'
      name='search'
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
      autoComplete='off'
    />
  )
}

export default Search