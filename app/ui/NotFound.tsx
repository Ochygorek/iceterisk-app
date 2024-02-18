'use client'

import Link from 'next/link'
import React from 'react'
import styles from '@/app/main.module.css'

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h2 className={styles.notFoundTitle}>404 not found</h2>
      <Link href='/' className={styles.notFoundHomButton}>Go home</Link>
    </div>
  )
}

export default NotFound