import React from 'react'
import styles from './BookButton.module.css'
import { Book as BookType } from '@/payload-types'
import Image from 'next/image'
import bookVars from '@/hooks/bookVars'
type BookProps = {
  book: BookType
}

export default function BookButton({ book }: BookProps) {
  const { imageSrc, imageAlt, author, series, bookNumber, published, description, rating } =
    bookVars(book)

  return (
    <button className={styles.book}>
      <div className={styles.bookImage}>
        <Image src={imageSrc} alt={imageAlt} width={200} height={300} />
      </div>
      <div className={styles.bookContent}>
        <h2 className={styles.bookTitle}>{book.title}</h2>
        <h3 className={styles.bookAuthor}>{author}</h3>
        <p className={styles.bookSeries}>{series}</p>
      </div>
    </button>
  )
}
