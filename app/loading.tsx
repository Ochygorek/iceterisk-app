import React from 'react'
import styles from '@/app/main.module.css'
import Image from 'next/image'

export default function Loading() {
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