import { Book } from '@/payload-types'
import React from 'react'
import styles from './MainContent.module.css'
import BookButton from '@/components/BookButton/BookButton'
import { useViewContext } from '@/contexts/viewProvider'
import useBookOrder from '@/hooks/useBookOrder'

export default function MainContent() {
  const { view } = useViewContext()
  const { bookOrder } = useBookOrder()

  // console.log({ bookOrder })

  const booksContainerClass = view === 'grid' ? styles.grid : styles.list

  return (
    <div className={styles.mainContent}>
      <div className={styles.mainWrapper}>
        <div className={`${styles.booksContainer} ${booksContainerClass}`}>
          {bookOrder && bookOrder.map((book: Book) => <BookButton key={book.bookId} book={book} />)}
        </div>
      </div>
    </div>
  )
}
