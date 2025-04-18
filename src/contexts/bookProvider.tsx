'use client'

import React from 'react'
import { Book } from '@/payload-types'
import useGetStuff from '@/hooks/useGetStuff'
import { filterBooks } from '@/utils/array-utils'
import { filterBooksByTags } from '@/utils/array-utils'
import { sortBooksBy } from '@/utils/array-utils'
import { useBookSettings } from './bookSettingsProvider'

interface BookContextType {
  books: Book[]
  updateBooks: (books: Book[]) => void
}

export const BookContext = React.createContext<BookContextType | null>(null)

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useGetStuff('books')
  const { bookSettings } = useBookSettings()
  const [books, setBooks] = React.useState<Book[]>([])
  const bookList = data?.docs

  function updateBooks(newBooks: Book[]) {
    setBooks(newBooks)
  }

  React.useEffect(() => {
    if (bookList !== undefined) {
      const initialBooks = [...bookList]
      // filter the books based on the filter value
      const filteredBooks = filterBooks(initialBooks, bookSettings.author, bookSettings.series)
      const filteredBooksByTags = filterBooksByTags(filteredBooks, bookSettings.tags)
      // sort the books based on the sort value
      const sortedBooks = sortBooksBy(filteredBooksByTags, bookSettings.sort)
      if (sortedBooks) {
        if (bookSettings.order !== 'asc') {
          updateBooks(sortedBooks.reverse().flat())
        } else {
          updateBooks(sortedBooks.flat())
        }
      }
    }
  }, [bookList, bookSettings])

  return <BookContext.Provider value={{ books, updateBooks }}>{children}</BookContext.Provider>
}

export function useBookContext() {
  const context = React.useContext(BookContext)
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider')
  }
  return context
}
