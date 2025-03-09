import { Book } from '@/payload-types'
import React from 'react'
import styles from './MainContent.module.css'
import BookButton from '@/components/BookButton/BookButton'
import { useBookContext } from '@/contexts/bookProvider'
import { useViewContext } from '@/contexts/viewProvider'

export default function MainContent() {
  const { books } = useBookContext()
  const { view } = useViewContext()

  const booksContainerClass = view === 'grid' ? styles.grid : styles.list

  console.log(books)

  return (
    <div className={styles.mainContent}>
      <div className={styles.mainWrapper}>
        <div className={`${styles.booksContainer} ${booksContainerClass}`}>
          {books && books.map((book) => <BookButton key={book.bookId} book={book} />)}
        </div>
      </div>
    </div>
  )
}
