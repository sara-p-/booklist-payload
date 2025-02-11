import { Book } from '@/payload-types'
import React from 'react'
import styles from './MainContent.module.css'
import BookButton from '@/components/BookButton/BookButton'

type MainContentProps = {
  books: Book[]
}

export default function MainContent({ books }: MainContentProps) {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainWrapper}>
        <div className={styles.bookGrid}>
          {books && books.map((book) => <BookButton key={book.id} book={book} />)}
        </div>
      </div>
    </div>
  )
}
