'use client'

import React from 'react'
import { Book } from '@/payload-types'
import useGetStuff from '@/hooks/useGetStuff'
import { filterBooks } from '@/utils/array-utils'
import { filterBooksByTags } from '@/utils/array-utils'
import { sortBooksBy } from '@/utils/array-utils'
import { useBookSettings } from './bookSettingsProvider'
import { useBookFiltering } from '@/hooks/useBookFiltering'

interface BookContextType {
  books: Book[]
  updateBooks: (books: Book[]) => void
}

export const BookContext = React.createContext<BookContextType | null>(null)

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useGetStuff('books')
  const { bookSettings } = useBookSettings()
  const [books, setBooks] = React.useState<Book[]>([])
  const filteredBooks = useBookFiltering({ settings: bookSettings, books: data?.docs })
  // const filteredBooks = useBookFiltering({ settings: bookSettings, books })

  function updateBooks(newBooks: Book[]) {
    if (newBooks !== undefined) {
      const newBooksArray = [...newBooks]
      setBooks(newBooksArray)
    }
  }

  React.useEffect(() => {
    if (data !== undefined) {
      updateBooks(data.docs)
    }
  }, [data])

  React.useEffect(() => {
    updateBooks(filteredBooks)
  }, [filteredBooks])

  return <BookContext.Provider value={{ books, updateBooks }}>{children}</BookContext.Provider>
}

export function useBookContext() {
  const context = React.useContext(BookContext)
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider')
  }
  return context
}
