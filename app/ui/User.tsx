import Image from 'next/image'
import React from 'react'
import styles from '@/app/SideBar.module.css'

function User() {
  return (
    <div className={styles.userContainer}>
        <Image
        src='/profile.svg'
        alt='User'
        width={32}
        height={32}
        />
        <span>Early access</span>
    </div>
  )
}

export default User