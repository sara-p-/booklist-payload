import { useBookContext } from '@/contexts/bookProvider'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { Book } from '@/payload-types'
import { BookSettingsType } from '@/types/types'
// import { BookSettingsType } from '@/types/types'
import { filterBooks, filterBooksByTags, sortBooksBy } from '@/utils/array-utils'
import React from 'react'

type BookFilter = {
  settings: BookSettingsType
  books: Book[]
}

export const useBookFilteringAgain = ({ settings, books }: BookFilter) => {
  // const { books, updateBooks } = useBookContext()
  const [filteredBooks, setFilteredBooks] = React.useState<Book[]>(books)

  function updateFilteredBooks(filteredBooks: Book[]) {
    // filter the books based on the filter value
    let newFilteredBooks = [...filteredBooks]
    newFilteredBooks = filterBooks(newFilteredBooks, 'author', settings.author)
    newFilteredBooks = filterBooks(newFilteredBooks, 'series', settings.series)
    newFilteredBooks = filterBooksByTags(newFilteredBooks, settings.tags)

    // sort the books based on the sort value
    const sortedBooks = sortBooksBy(newFilteredBooks, settings.sort)
    if (sortedBooks) {
      if (settings.order !== 'asc') {
        newFilteredBooks = sortedBooks.reverse().flat()
      } else {
        newFilteredBooks = sortedBooks.flat()
      }
    }
    setFilteredBooks(newFilteredBooks)
  }

  // React.useEffect(() => {
  //   if (books !== undefined) {
  //     updateFilteredBooks(books)
  //   }
  // }, [books])

  // React.useEffect(() => {
  //   // filter the books based on the filter value
  //   updateFilteredBooks(filterBooks(filteredBooks, 'author', bookSettings.author))
  //   updateFilteredBooks(filterBooks(filteredBooks, 'series', bookSettings.series))
  //   updateFilteredBooks(filterBooksByTags(filteredBooks, bookSettings.tags))

  //   // sort the books based on the sort value
  //   const sortedBooks = sortBooksBy(filteredBooks, bookSettings.sort)
  //   if (sortedBooks) {
  //     if (bookSettings.order !== 'asc') {
  //       updateFilteredBooks(sortedBooks.reverse().flat())
  //     } else {
  //       updateFilteredBooks(sortedBooks.flat())
  //     }
  //   }
  // }, [bookSettings, filteredBooks])

  return { filteredBooks, updateFilteredBooks }
}
