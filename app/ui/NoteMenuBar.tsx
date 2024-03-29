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

  function handleRename() {
    console.log('rename: ', id)
  }

  function handleDelete() {
    deleteNote(id)
    setUpdate((prev: any) => (prev + 1))
  }

  /*
    TODO: make the menu horizontal with only icons and add tooltips
  */

  return (
    <div className={styles.noteMenuBar}>
      <div className={styles.noteMenuInnerContainer}>
        <button onClick={() => {}}>
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.6 -8.9407e-08L0 1.6L6.4 8L0 14.4L1.6 16L8 9.6L14.4 16L16 14.4L9.6 8L16 1.6L14.4 -8.9407e-08L8 6.4L1.6 -8.9407e-08Z" fill="#EAEAEA"/>
        </svg>

          {/* <Image
            src='close.svg'
            alt='Close image'
            width={12}
            height={12}
          /> */}
        </button>
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
        <button onClick={handleDelete} className={styles.negative}>
          <svg width="12" height="13.5" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z" fill="#FF5353"/>
          </svg>

          {/* <Image
            src='delete.svg'
            alt='Close image'
            width={12}
            height={12}
          /> */}
        </button>
      </div>
    </div>
  )
}

export default NoteMenuBar