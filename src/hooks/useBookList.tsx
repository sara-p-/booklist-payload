import BookButton from '@/components/BookButton/BookButton'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { BookWithExtrasType } from '@/types/types'
import styles from '@/components/MainContent/MainContent.module.css'
import { Fragment } from 'react'

interface BookListProps {
  books: BookWithExtrasType[]
}

export default function useBookList({ books }: BookListProps) {
  // I need to know if the books exist, then what the settings are, then what the view is

  const { bookSettings } = useBookSettings()

  const renderBookList = () => {
    if (books) {
      switch (bookSettings.sort) {
        case 'series':
          return books.map((book: BookWithExtrasType) => {
            if ('seriesTitle' in book) {
              return (
                <Fragment key={book.id}>
                  <p className={styles.seriesTitle}>{book.seriesTitle}</p>
                  <BookButton book={book} />
                </Fragment>
              )
            }
            return <BookButton key={book.id} book={book} />
          })
        default:
          return books.map((book: BookWithExtrasType) => {
            return <BookButton key={`${book.length}-${book.id}`} book={book} />
          })
      }
    }
  }

  return { renderBookList }
}
