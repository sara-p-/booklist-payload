import BookButton from '@/components/BookButton/BookButton'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { BookWithExtrasType } from '@/types/types'
import styles from '@/components/MainContent/MainContent.module.css'

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
            if (book.seriesTitle !== '') {
              return (
                <>
                  <p className={styles.seriesTitle} key={`${book.seriesTitle}-${book.id}`}>
                    {book.seriesTitle}
                  </p>
                  <BookButton key={`${book.bookId}-${book.id}`} book={book} />
                </>
              )
            }
            return <BookButton key={`${book.title}-${book.id}`} book={book} />
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
