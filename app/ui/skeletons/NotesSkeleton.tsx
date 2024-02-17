import React from 'react'
import styles from '@/app/sideBar.module.css'

function NotesSkeleton() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (
    <>
      {arr.map((d) => (
        <div key={d} className={styles.noteSkeleton}>
          <div className={styles.noteSkeletonLeft}></div>
          <div className={styles.noteSkeletonRight}></div>
        </div>
      ))}
    </>
  )
}

export default NotesSkeleton