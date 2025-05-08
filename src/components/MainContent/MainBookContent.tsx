'use client'

import BookPage from '@/components/Book/BookPage'
import styles from './MainContent.module.css'
import { useBookContext } from '@/contexts/bookProvider'
import { slugify } from '@/utils/helpers'

interface BookPageContentProps {
  bookTitle: string
}

export default function MainBookContent({ bookTitle }: BookPageContentProps) {
  const { books } = useBookContext()
  const book = books.find((book) => slugify(book.title) === bookTitle)

  return (
    <div className={styles.mainContent}>
      <div className={styles.mainWrapper}>
        <div className={styles.booksContainer}>
          {!book ? <div>Loading...</div> : <BookPage book={book} />}
        </div>
      </div>
    </div>
  )
}
