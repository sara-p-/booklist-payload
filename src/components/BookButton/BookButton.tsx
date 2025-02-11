import React from 'react'
import styles from './BookButton.module.css'
import { Book as BookType } from '@/payload-types'
import Image from 'next/image'

type BookProps = {
  book: BookType
}

export default function BookButton({ book }: BookProps) {
  const imageSrc = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/file/${book.image.filename}`
  // const imageSrc =
  //   typeof book.image !== 'string' && book.image?.filename
  //     ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/file/${book.image.filename}`
  //     : ''

  // const imageAlt = typeof book.image !== 'string' ? book.image?.alt || '' : ''
  // const authorName = typeof book.author !== 'string' ? book.author?.name || '' : ''

  return (
    <button className={styles.book}>
      <div className={styles.bookImage}>
        <Image src={imageSrc} alt={imageAlt} width={200} height={300} />
      </div>
      <div className={styles.bookContent}>
        <div className={styles.bookTitle}>{book.title}</div>
        <div className={styles.bookAuthor}>{book.author.name}</div>
      </div>
    </button>
  )
}
