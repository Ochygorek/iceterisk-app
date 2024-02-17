import Image from 'next/image'
import React from 'react'
import styles from '../SideBar.module.css'

// fetch users email and display it next to circle Image
function User() {
  return (
    <div className={styles.userContainer}>
        <Image
        src='/profile.svg'
        alt='User'
        width={32}
        height={32}
        />

        {/* fetch email */}
        <span>Early access</span>
    </div>
  )
}

export default User