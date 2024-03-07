import DeleteNotes from '@/app/ui/DeleteNotes'
import ResetNumbersNotes from '@/app/ui/ResetNumbersNotes'
import React from 'react'
import styles from '@/app/css/settingsPage.module.css'

function Settings() {
  return (
    <div className={styles.root}>
      <h1>Settings</h1>
      <DeleteNotes />
      <ResetNumbersNotes />
      <span className={styles.disclaimer}>Changes are permanent and there is no confirmation screen.</span>
    </div>
  )
}

export default Settings