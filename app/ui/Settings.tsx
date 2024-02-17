'use client'

import React, { Suspense, useState } from 'react';
import styles from '../sideBar.module.css'
import SettingsSkeleton from './skeletons/SettingsSkeleton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Settings() {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  function handleClick() {
    setOpen(!open);
  }

  const handleClose = () => {
    handleClick()
  }

  const handleSettings = () => {
    router.push('/settings')
  }

  const handleDonate = () => {
    router.push('https://iceterisk.com/donate')
  }

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <div>
      <Suspense fallback={<SettingsSkeleton />}>
        <button className={styles.options} onClick={handleClick}>
          <svg 
            className={styles.optionsIcon}
            width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.86567 16.8L7.26368 20H12.7363L13.1343 16.8C13.3333 16.7167 13.5323 16.6167 13.7313 16.5C13.9303 16.3833 14.1211 16.2583 14.3035 16.125L17.2388 17.375L19.9751 12.625L17.4129 10.675C17.4461 10.5583 17.4627 10.4458 17.4627 10.3375V9.6625C17.4627 9.55417 17.4544 9.44167 17.4378 9.325L20 7.375L17.2637 2.625L14.3035 3.875C14.1211 3.74167 13.9345 3.61667 13.7438 3.5C13.5531 3.38333 13.3499 3.28333 13.1343 3.2L12.7363 0H7.26368L6.86567 3.2C6.66667 3.28333 6.46766 3.38333 6.26866 3.5C6.06965 3.61667 5.87894 3.74167 5.69652 3.875L2.73632 2.625L0 7.375L2.56219 9.325C2.54561 9.44167 2.53731 9.55417 2.53731 9.6625V10.3375C2.53731 10.4458 2.54561 10.5583 2.56219 10.675L0 12.625L2.73632 17.375L5.69652 16.125C5.87894 16.2583 6.06551 16.3833 6.25622 16.5C6.44693 16.6167 6.65008 16.7167 6.86567 16.8ZM10.9701 18H9.00498L8.68159 15.35C8.1675 15.2167 7.69071 15.0208 7.25124 14.7625C6.81177 14.5042 6.40962 14.1833 6.04478 13.8L3.58209 14.85L2.61194 13.15L4.75124 11.525C4.66832 11.275 4.61028 11.025 4.57711 10.775C4.54395 10.525 4.52736 10.2667 4.52736 10C4.52736 9.71667 4.54395 9.45 4.57711 9.2C4.61028 8.95 4.66832 8.7 4.75124 8.45L2.61194 6.85L3.58209 5.15L6.04478 6.175C6.40962 5.80833 6.81177 5.49583 7.25124 5.2375C7.69071 4.97917 8.1675 4.78333 8.68159 4.65L9.02985 2H10.995L11.3184 4.65C11.8325 4.78333 12.3093 4.97917 12.7488 5.2375C13.1882 5.49583 13.5904 5.81667 13.9552 6.2L16.4179 5.15L17.3881 6.85L15.2488 8.475C15.3317 8.70833 15.3897 8.95417 15.4229 9.2125C15.4561 9.47083 15.4726 9.73333 15.4726 10C15.4726 10.2667 15.4561 10.5292 15.4229 10.7875C15.3897 11.0458 15.3317 11.2917 15.2488 11.525L17.3881 13.15L16.4179 14.85L13.9552 13.825C13.5904 14.1917 13.1882 14.5042 12.7488 14.7625C12.3093 15.0208 11.8325 15.2167 11.3184 15.35L10.9701 18ZM12.5124 12.475C11.8325 13.1583 11.0116 13.5 10.0498 13.5C9.07131 13.5 8.24627 13.1583 7.57463 12.475C6.90299 11.7917 6.56716 10.9667 6.56716 10C6.56716 9.03333 6.90299 8.20833 7.57463 7.525C8.24627 6.84167 9.07131 6.5 10.0498 6.5C11.0116 6.5 11.8325 6.84167 12.5124 7.525C13.1924 8.20833 13.5323 9.03333 13.5323 10C13.5323 10.9667 13.1924 11.7917 12.5124 12.475ZM10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" fill="#EAEAEA"/>
          </svg>
        </button>
      </Suspense>

      {open && (
        <div className={styles.optionsMenu}>
          <button 
            onClick={handleClose} 
          >
            <span>Close menu</span>
            <Image
              src='close.svg'
              alt='Close image'
              width={12}
              height={12}
            />
          </button>
          <div className={styles.menuDivider}></div>
          <button 
            onClick={handleSettings} 
          >
            <span>Settings</span>
            <Image
              src='subtract.svg'
              alt='Settings image'
              width={12}
              height={12}
            />
          </button>
          <button 
            onClick={handleDonate} 
            className={styles.highlight}
          >
            <span>Support Iceterisk</span>
            <Image
              src='donate.svg'
              alt='Support Iceterisk image'
              width={12}
              height={12}
            />
          </button>
          <button 
            onClick={handleLogout}
          >
            <span>home</span>
            <Image
              src='home.svg'
              alt='home image'
              width={12}
              height={12}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default Settings;