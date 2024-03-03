'use client'

import React, { ReactNode } from 'react'
import SideBar from '@/app/ui/SideBar'
import styles from '@/app/main.module.css'
import Link from "next/link";
import { isMobile } from '@/noteActions/detectDevice'

function Main({children}: {children: ReactNode }) {
  return (
    <>
      {isMobile() ? <div></div>:
          <main className={styles.pageMain}>
            <nav className={styles.sideNavNav}>
              <SideBar />
            </nav>
            <section className={styles.sectionMain}>
              <div className={styles.topNav}>
                <Link href='https://iceterisk.com/donate' target="_blank" className={styles.topNavButton}>Support Iceterisk</Link>
              </div>  
              <div className={styles.pageContent}>
                {children}
              </div>
            </section>
          </main>
      }
    </>
  )
}

export default Main