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

  React.useEffect(() => {
    // filter the books based on the filter value
    setFilteredBooks(filterBooks(books, 'author', settings.author))
    setFilteredBooks(filterBooks(books, 'series', settings.series))
    setFilteredBooks(filterBooksByTags(books, settings.tags))

    // sort the books based on the sort value
    const sortedBooks = sortBooksBy(books, settings.sort)
    if (sortedBooks) {
      if (settings.order !== 'asc') {
        setFilteredBooks(sortedBooks.reverse().flat())
      } else {
        setFilteredBooks(sortedBooks.flat())
      }
    }
  }, [settings, books])

  return filteredBooks
}
