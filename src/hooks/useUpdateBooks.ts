import { useBookContext } from '@/contexts/bookProvider'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
// import { Book } from '@/payload-types'
// import { BookSettingsType } from '@/types/types'
import { filterBooks, filterBooksByTags, sortBooksBy } from '@/utils/array-utils'
import React from 'react'

type BookFilter = {
  label: string
  value: string
}

export const useUpdateBooks = ({ label, value }: BookFilter) => {
  const { books, updateBooks } = useBookContext()
  const { bookSettings } = useBookSettings()

  if (label !== 'sort') {
    // filter the books based on the filter value
    return filterBooks(books, label, value)
  } else {
    // sort the books based on the sort value
    const sortedBooks = sortBooksBy(books, bookSettings.sort)
    if (sortedBooks) {
      if (bookSettings.order !== 'asc') {
        return sortedBooks.reverse().flat()
      } else {
        return sortedBooks.flat()
      }
    }
  }
}
