import { useBookContext } from '@/contexts/bookProvider'
import { Book } from '@/payload-types'
import { BookSettingsType } from '@/types/types'
import { filterBooks, filterBooksByTags, sortBooksBy } from '@/utils/array-utils'
import React from 'react'

type BookFilter = {
  settings: BookSettingsType
  books: Book[]
}

export const useBookFiltering = ({ settings, books }: BookFilter) => {
  const [filteredBooks, setFilteredBooks] = React.useState<Book[]>(books)

  function updateFilteredBooks(books: Book[]) {
    const newFilteredBooks = [...books]
    setFilteredBooks(newFilteredBooks)
  }

  React.useEffect(() => {
    // filter the books based on the filter value
    updateFilteredBooks(filterBooks(books, 'author', settings.author))
    updateFilteredBooks(filterBooks(books, 'series', settings.series))
    updateFilteredBooks(filterBooksByTags(books, settings.tags))

    // sort the books based on the sort value
    const sortedBooks = sortBooksBy(books, settings.sort)
    if (sortedBooks) {
      if (settings.order !== 'asc') {
        updateFilteredBooks(sortedBooks.reverse().flat())
      } else {
        updateFilteredBooks(sortedBooks.flat())
      }
    }
  }, [settings, books])

  return filteredBooks
}
