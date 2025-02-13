'use client'

import { Book } from '@/payload-types'
import React from 'react'
import useGetBooks from '@/hooks/useGetBooks'
interface BookContextType {
  books: Book[]
  updateBooks: (books: Book[]) => void
}

export const BookContext = React.createContext<BookContextType | null>(null)

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const { data } = useGetBooks()
  const [books, setBooks] = React.useState<Book[]>([])

  function updateBooks(newBooks: Book[]) {
    setBooks(newBooks)
  }

  React.useEffect(() => {
    if (data) {
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
