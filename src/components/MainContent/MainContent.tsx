import { Book } from '@/payload-types'
import React from 'react'
import styles from './MainContent.module.css'
import BookButton from '@/components/BookButton/BookButton'
import { useViewContext } from '@/contexts/viewProvider'
import { useFilteredBookContext } from '@/contexts/filteredBooksProvider'

export default function MainContent() {
  const { listView } = useViewContext()
  const { filteredBooks } = useFilteredBookContext()

  const booksContainerClass = listView ? styles.listView : styles.gridView

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
