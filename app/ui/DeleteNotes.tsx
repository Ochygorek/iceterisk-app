'use client'

import React from 'react'
import styles from '@/app/css/settingsPage.module.css'
import Image from 'next/image'
import { deleteAllNotes } from '@/noteActions/settings'

function DeleteNotes() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionText}>
        <h3>Delete Notes</h3>
        <span>All notes will be permanently deleted.</span>
      </div>
      <button onClick={deleteAllNotes} className={`negative ${styles.sectionButton}`}>
        <Image
          src='/deleteSettings.svg'
          alt='Delete notes bin icon.'
          width={32}
          height={32}
          className={styles.sectionImage}
        />
      </button>
    </section>
  )
}

export default DeleteNotes