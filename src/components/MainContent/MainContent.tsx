import { Book } from '@/payload-types'
import React from 'react'
import styles from './MainContent.module.css'
import BookButton from '@/components/BookButton/BookButton'
import { useViewContext } from '@/contexts/viewProvider'
import { useBookContext } from '@/contexts/bookProvider'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
export default function MainContent() {
  const { view } = useViewContext()
  const { books } = useBookContext()
  const { bookSettings } = useBookSettings()

  // console.log('books', books)

  const booksContainerClass = view === 'grid' ? styles.grid : styles.list

  return (
    <div className={styles.mainContent}>
      <div className={styles.mainWrapper}>
        <div className={`${styles.booksContainer} ${booksContainerClass}`}>
          {books && books.map((book: Book) => <BookButton key={book.bookId} book={book} />)}
        </div>
      </div>
    </div>
  )
}
