'use client'

import React from 'react'
import { Book } from '@/payload-types'
import useGetStuff from '@/hooks/useGetStuff'

interface BookContextType {
  books: Book[]
  updateBooks: (books: Book[]) => void
}

export const BookContext = React.createContext<BookContextType | null>(null)

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useGetStuff('books')
  const [books, setBooks] = React.useState<Book[]>([])

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

  return <BookContext.Provider value={{ books, updateBooks }}>{children}</BookContext.Provider>
}

export function useBookContext() {
  const context = React.useContext(BookContext)
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider')
  }
  return context
}
