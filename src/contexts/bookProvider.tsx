import { Book } from '@/payload-types'
import React from 'react'

interface BookContextType {
  books: Book[]
  setBooks: (books: Book[]) => void
}

export const BookContext = React.createContext<BookContextType | null>(null)

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = React.useState<Book[]>([])

  return <BookContext.Provider value={{ books, setBooks }}>{children}</BookContext.Provider>
}

export function useBookContext() {
  const context = React.useContext(BookContext)
  if (!context) {
    throw new Error('useBookContext must be used within a BookProvider')
  }
  return context
}
