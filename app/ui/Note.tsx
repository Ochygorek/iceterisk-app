'use client'

import React, { Suspense, useEffect, useState } from 'react'
import styles from '@/app/sideBar.module.css'
import { data } from '../lib/placeholder-data'
import NoteMenu from './NoteMenu'
import Image from 'next/image'
import NoteMenuBar from './NoteMenuBar'
import NotesSkeleton from './skeletons/NotesSkeleton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface noteReturn {
  name: string;
  id: string;
  image: string;
  content: string | null;
}

function Note(prop: any, {
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const [pinned, setPinned] = useState<string[]>([]);
  const [show, setShow] = useState<string | null>(null);
  const [notes, setNotes] = useState<noteReturn[]>([]);

  useEffect(() => {
    const updatedNotesFromLocalStorage: string | null = localStorage.getItem('localStorageArray');
    const updatedParsedNotes: noteReturn[] = updatedNotesFromLocalStorage ? JSON.parse(updatedNotesFromLocalStorage) : [];
  
    // Only update state if the notes have changed
    if (JSON.stringify(updatedParsedNotes) !== JSON.stringify(notes)) {
      setNotes(updatedParsedNotes);
    }
  }, [prop.update, notes]);
  // notes remove ??


  // change pinned
  const handlePinClick = (id: string) => {
    setPinned((prevPinned) => {
      if (prevPinned.includes(id)) {
        return prevPinned.filter((noteId) => noteId !== id);
      } else {
        return [...prevPinned, id];
      }
    });
  };

  // open menu
  const handleMenuClick = (id: string) => {
    setShow((prevNoteId) => (prevNoteId === id ? null : id));
  };

  // sort pinned
  const sortedData = notes.sort((a, b) => {
    const isAPinned = pinned.includes(a.id);
    const isBPinned = pinned.includes(b.id);

    if (isAPinned && !isBPinned) {
      return -1;
    } else if (!isAPinned && isBPinned) {
      return 1;
    } else {
      return 0;
    }
  });
  
  const router = useRouter()

  const handleRedirect = (id: string) => {
    router.push(id)
  }

  // console.log('notes array render: ')

  return (
    <>
      {/* <Suspense key={query + currentPage} fallback={<NotesSkeleton />}> */}
        {sortedData.map((d) => (
          <div onClick={() => handleRedirect(d.id)} key={d.id} className={styles.notesIndividual}>
            <Image 
              src={`${pinned.includes(d.id) ? '/pinfull.svg' : '/pinempty.svg' }`}
              alt='Pin'
              width={16}
              height={16}
              onClick={() => handlePinClick(d.id)}
              style={{ cursor: 'pointer' }}
            />
            <input 
              className={styles.notesNameInputField}
              type="text" 
              placeholder={d.name}
              value={d.name}
              onChange={(e) => (e.target.value)}
              disabled
            />
            <button
              onClick={() => handleMenuClick(d.id)}
              className={styles.notesIndividualMenu}
            >
              <NoteMenu src={d.image} />
              {show === d.id && <NoteMenuBar id={d.id} setUpdate={prop.setUpdate} />}
            </button>
          </div>
        ))}
      {/* </Suspense> */}
    </>
  )
}

export default Note