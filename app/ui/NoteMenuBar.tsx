import React from 'react'
import styles from '@/app/sideBar.module.css'
import Image from 'next/image';
import { deleteNote } from '@/noteActions/notesArray';

interface NoteMenuBarProps {
  id: string;
  setUpdate: any; // Assuming setUpdate is a required prop
}

function NoteMenuBar({
  id,
  setUpdate,
}: 
  NoteMenuBarProps
) {
  function handleClick() {
    deleteNote(id)
    setUpdate((prev: any) => (prev + 1))
  }

  function handleRename() {
    console.log('rename: ', id)
  }

  function handleDelete() {
    console.log('DELETE: ', id)
  }

  return (
    <div className={styles.noteMenuBar}>
      <div className={styles.noteMenuInnerContainer}>
        <button onClick={() => {}}>Close menu</button>
        <Image
          src='close.svg'
          alt='Close image'
          width={12}
          height={12}
        />
      </div>
      <div className={styles.menubarDivider}></div>
      {/* <div className={styles.noteMenuInnerContainer}>
        <button onClick={handleRename}>Rename</button>
        <Image
          src='rename.svg'
          alt='Close image'
          width={12}
          height={12}
        />
      </div> */}
      <div className={styles.noteMenuInnerContainer}>
        <button onClick={handleClick} className={styles.negative}>Delete</button>
        <Image
          src='delete.svg'
          alt='Close image'
          width={12}
          height={12}
        />
      </div>
    </div>
  )
}

export default NoteMenuBar