import { Book } from '@/payload-types'
import React from 'react'
import styles from './MainContent.module.css'
import BookButton from '@/components/BookButton/BookButton'
import { useBookContext } from '@/contexts/bookProvider'
import useGetBooks from '@/hooks/useGetBooks'

export default function MainContent() {
  const { books, updateBooks } = useBookContext()
  // const { data } = useGetBooks()

  // React.useEffect(() => {
  //   if (data) {
  //     updateBooks(data.docs)
  //   }
  // }, [])

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
