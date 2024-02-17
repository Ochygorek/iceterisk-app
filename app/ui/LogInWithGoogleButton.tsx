'use client'

import Image from 'next/image'
import React from 'react'
import styles from '@/app/logIn.module.css'




function LogInWithGoogleButton({ handleSignIn }: { handleSignIn: any }) {
    
  return (
    <button className={styles.googleButton} onClick={handleSignIn}>
        <Image
        src={"/"}
        alt="Log In with Google logo"
        width={16}
        height={16}
        />
        <span>Sign in with Google</span>
        <span className={styles.filler}></span>
    </button>
  )
}

export default LogInWithGoogleButton