import { Book } from '@/payload-types'
import React from 'react'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { useBookContext } from '@/contexts/bookProvider'
import { filterBooks, filterBooksByTags, sortBooksBy } from '@/utils/array-utils'

type BookOrderType = {
  bookOrder: Book[]
  setBookOrder: (bookOrder: Book[]) => void
}

export default function useBookOrder(): BookOrderType {
  const [bookOrder, setBookOrder] = React.useState<Book[]>([])
  const { bookSettings } = useBookSettings()
  const { books } = useBookContext()

  React.useEffect(() => {
    if (books !== undefined) {
      const initialBooks = [...books]

      // filter the books based on the filter value
      const filteredBooks = filterBooks(initialBooks, bookSettings.author, bookSettings.series)
      const filteredBooksByTags = filterBooksByTags(filteredBooks, bookSettings.tags)
      // sort the books based on the sort value
      const sortedBooks = sortBooksBy(filteredBooksByTags, bookSettings.sort)
      if (sortedBooks) {
        if (bookSettings.order !== 'asc') {
          setBookOrder(sortedBooks.reverse().flat())
        } else {
          setBookOrder(sortedBooks.flat())
        }
      }
    }
  }, [books, bookSettings])

  return { bookOrder, setBookOrder }
}
