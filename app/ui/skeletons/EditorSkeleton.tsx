import React from 'react'
import styles from '@/app/main.module.css'
import Image from 'next/image'

function EditorSkeleton() {
  return (
    <div className={styles.editorSkeletonContainer}>
      <Image
        src={'/loading.svg'}
        alt='Loading screen roller'
        width={48}
        height={48}
      />
    </div>
  )
}

export default EditorSkeleton