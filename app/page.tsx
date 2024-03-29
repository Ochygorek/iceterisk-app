import React from 'react'
import styles from '@/app/main.module.css'
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <div className={styles.home}>
      <h1 className={styles.homeHeading}>Welcome to Iceterisk</h1>
      <span>Start by creating New Note.</span>
      <div className={styles.homeLinksContainer}>
        <span>Discover more:</span>
        <Link href={'https://iceterisk.com/docs'} target="_blank" className={styles.homeLink}>
          <span>Documentation</span>
          <Image
            src={'/openinanotherwindow.svg'}
            alt='Open Documentation in another window image'
            width={12}
            height={12}
          />
        </Link>
        <Link href={'https://iceterisk.com/news'} target="_blank" className={styles.homeLink}>
          <span>News</span>
          <Image
            src={'/openinanotherwindow.svg'}
            alt='Open Documentation in another window image'
            width={12}
            height={12}
          />
        </Link>
        <Link href={'https://iceterisk.com/donate'} target="_blank" className={`${styles.homeLink} ${styles.homeLinkHighlight}`}>
          <span>Support Iceterisk</span>
          <Image
            src={'/openinanotherwindow.svg'}
            alt='Open Documentation in another window image'
            width={12}
            height={12}
          />
        </Link>
      </div>
    </div>
  )
}

export default page