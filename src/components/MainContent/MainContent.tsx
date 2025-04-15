import { Book } from '@/payload-types'
import React from 'react'
import styles from './MainContent.module.css'
import BookButton from '@/components/BookButton/BookButton'
import { useBookContext } from '@/contexts/bookProvider'
import { useViewContext } from '@/contexts/viewProvider'
import useBookOrder from '@/hooks/useBookOrder'
import useGetStuff from '@/hooks/useGetStuff'
export default function MainContent() {
  const { books } = useBookContext()
  // const { data } = useGetStuff('books')
  const { view } = useViewContext()
  const { bookOrder } = useBookOrder()

  // console.log({ bookOrder })

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
