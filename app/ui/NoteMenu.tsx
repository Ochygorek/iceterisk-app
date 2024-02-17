import Image from 'next/image';
import React from 'react'

function NoteMenu(props: any) {
    const { src } = props;

  return (
    <Image
      src={src}
      alt='Note menu image placeholder'
      width={16}
      height={16}
    />
  )
}

export default NoteMenu