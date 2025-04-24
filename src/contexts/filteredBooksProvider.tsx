'use client'

import React from 'react'
import { Book } from '@/payload-types'
import useGetStuff from '@/hooks/useGetStuff'
import { filterBooks, filterBooksBySettings } from '@/utils/array-utils'
import { filterBooksByTags } from '@/utils/array-utils'
import { sortBooksBy } from '@/utils/array-utils'
import { useBookSettings } from './bookSettingsProvider'
import { useBookFiltering } from '@/hooks/useBookFiltering'
import { useBookFilteringAgain } from '@/hooks/useBookFilteringAgain'
import { BookContext, useBookContext } from './bookProvider'

interface BookContextType {
  filteredBooks: Book[]
  updateFilteredBooks: (books: Book[]) => void
}

export const FilteredBookContext = React.createContext<BookContextType | null>(null)

export const FilteredBookProvider = ({ children }: { children: React.ReactNode }) => {
  const { bookSettings } = useBookSettings()
  const { books } = useBookContext()
  const [filteredBooks, setFilteredBooks] = React.useState<Book[]>(books)
  // const { updateFilteredBooks } = useBookFilteringAgain({ settings: bookSettings, books })
  // const filteredBooks = useBookFiltering({ settings: bookSettings, books })

  function updateFilteredBooks(newFilteredBooks: Book[]) {
    if (newFilteredBooks !== undefined) {
      const newFilteredBooksArray = [...newFilteredBooks]
      setFilteredBooks(newFilteredBooksArray)
    }
  }

  React.useEffect(() => {
    if (bookSettings !== undefined) {
      const newBooks = [...books]
      const newFilteredBooks = filterBooksBySettings(newBooks, bookSettings)
      setFilteredBooks(newFilteredBooks)
    }
  }, [books, bookSettings])

  return (
    <FilteredBookContext.Provider value={{ filteredBooks, updateFilteredBooks }}>
      {children}
    </FilteredBookContext.Provider>
  )
}

export function useFilteredBookContext() {
  const context = React.useContext(FilteredBookContext)
  if (!context) {
    throw new Error('useFilteredBookContext must be used within a FilteredBookProvider')
  }
  return context
}
