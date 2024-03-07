'use client'

import React from 'react'
import styles from '@/app/css/settingsPage.module.css'
import Image from 'next/image'
import { resetNumbers } from '@/noteActions/settings'

function ResetNumbersNotes() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionText}>
        <h3>Restart Numbers</h3>
        <span>Numbers will start back from 1.</span>
      </div>
      <button onClick={resetNumbers} className={`negative ${styles.sectionButton}`}>
        <Image
          src='/resetSettings.svg'
          alt='Reset number on notes bin icon.'
          width={32}
          height={32}
          className={styles.sectionImage}
        />
      </button>
    </section>
  )
}

export default ResetNumbersNotes