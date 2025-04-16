import { Book } from '@/payload-types'
import React from 'react'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { useBookContext } from '@/contexts/bookProvider'
import { sortBooksBy } from '@/global/array-utils'

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
      const sortedBooks = sortBooksBy(initialBooks, bookSettings.sort)
      if (sortedBooks) {
        if (bookSettings.order !== 'asc') {
          setBookOrder(sortedBooks.reverse())
        } else {
          setBookOrder(sortedBooks)
        }
      }
    }
  }, [books, bookSettings.order])

  return { bookOrder, setBookOrder }
}
