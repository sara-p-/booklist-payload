import { useBookSettings } from '@/contexts/bookSettingsProvider'
// import { useBookFiltering } from './useBookFiltering'
import { useBookContext } from '@/contexts/bookProvider'
import { filterBooks } from '@/utils/array-utils'
import { useBookFiltering } from './useBookFiltering'

export function useHandleFilterChange() {
  const { bookSettings, updateBookSettings } = useBookSettings()
  const { books, updateBooks } = useBookContext()
  // const filteredBooks = useBookFiltering({ settings: bookSettings, books: books })
  const newBooks = [...books]
  const newBookSettings = { ...bookSettings }

  function handleFilterChange(filter: string, value: string) {
    if (filter === 'tags') {
      if (newBookSettings.tags.includes(value)) {
        newBookSettings.tags = newBookSettings.tags.filter((t) => t !== value)
        updateBookSettings(newBookSettings)
        // updateBooks(filterBooks(newBooks, filter, value))
      } else {
        newBookSettings.tags = [...newBookSettings.tags, value]
        updateBookSettings(newBookSettings)
        // updateBooks(filterBooks(newBooks, filter, value))
      }
    } else {
      updateBookSettings({ ...newBookSettings, [filter]: value })
      const newFilteredBooks = filterBooks(newBooks, filter, value)
      console.log('newFilteredBooks', newFilteredBooks)
      // console.log('newSettings', newBookSettings)
      // updateBooks(newFilteredBooks)
    }
  }

  return { handleFilterChange }
}
