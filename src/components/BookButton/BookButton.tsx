import React from 'react'
import styles from './BookButton.module.css'
import { Book as BookType } from '@/payload-types'
import Image from 'next/image'
import bookVars from '@/hooks/bookVars'
import { useViewContext } from '@/contexts/viewProvider'
import { BookWithExtrasType } from '@/types/types'
import Link from 'next/link'

type BookProps = {
  book: BookWithExtrasType
  seriesTitle?: string
}

export default function BookButton({ book, seriesTitle }: BookProps) {
  const { listView } = useViewContext()
  const { imageSrc, imageAlt, author, series, bookNumber, published, rating } = bookVars(book)

  const bookStyle = listView ? `${styles.bookButton} ${styles.listView}` : styles.bookButton

  return (
    <Link href={`/book/${book.title}`} className={bookStyle}>
      <div className={styles.bookImage}>
        <Image src={imageSrc} alt={imageAlt} width={200} height={300} />
      </div>
      {listView && (
        <>
          <div className={styles.bookContent}>
            <h2 className={styles.bookTitle}>{book.title}</h2>
            <h3 className={styles.bookAuthor}>{author}</h3>
            <p className={styles.bookSeries}>
              <strong>Series:</strong> {series}
            </p>
            <p className={styles.bookNumber}>
              <strong>Book Number:</strong> {bookNumber}
            </p>
            <p className={styles.bookPublished}>
              <strong>Published:</strong> {published}
            </p>
          </div>
          <div className={styles.bookRating}>
            <span className={styles.bookRatingValue}>{rating}/10</span>
          </div>
        </>
      )}
    </Link>
  )
}
