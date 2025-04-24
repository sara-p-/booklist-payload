import { Book } from '@/payload-types'
import React from 'react'
import styles from './MainContent.module.css'
import BookButton from '@/components/BookButton/BookButton'
import { useViewContext } from '@/contexts/viewProvider'
import { useBookContext } from '@/contexts/bookProvider'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { useFilteredBookContext } from '@/contexts/filteredBooksProvider'

export default function MainContent() {
  const { view } = useViewContext()
  // const { books } = useBookContext()
  const { bookSettings } = useBookSettings()
  const { filteredBooks } = useFilteredBookContext()
  // console.log('books', books)

  const booksContainerClass = view === 'grid' ? styles.grid : styles.list

  return (
    <div className={styles.mainContent}>
      <div className={styles.mainWrapper}>
        <div className={`${styles.booksContainer} ${booksContainerClass}`}>
          {filteredBooks &&
            filteredBooks.map((book: Book) => <BookButton key={book.bookId} book={book} />)}
        </div>
      </div>
    </div>
  )
}
