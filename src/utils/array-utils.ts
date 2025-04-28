import { Book } from '@/payload-types'
import { BookSettingsType } from '@/types/types'

/**
 * Accepts the book object and the sort order and returns the sorted book object
 *
 * @param {Book[]} books - the book object
 * @param {string} sortBy - the sort order
 * @returns {Book[]} the sorted book object
 *
 */
export function sortBooksBy(books: Book[], sortBy: string) {
  if (!books) {
    return []
  }

  const originalBooks = [...books]
  switch (sortBy) {
    case 'series':
      // get an array of just the series titles
      const seriesArray = getTheSeries(originalBooks)
      // loop through the series titles array and create a bunch of smaller arrays of books that are in the same series
      const seriesBooks = seriesArray.map((series) => {
        return originalBooks
          .filter((book) => {
            return typeof book.series === 'string'
              ? book.series === series
              : book.series.title === series
          })
          .sort((a, b) => a.bookNumber - b.bookNumber)
      })
      return seriesBooks
    case 'title':
      // sort the books by title
      return originalBooks.sort((a, b) => a.title.localeCompare(b.title))
    case 'rating':
      // sort the books by rating
      return originalBooks.sort((a, b) => b.rating - a.rating)
    case 'published':
      // sort the books by published date
      return originalBooks.sort((a, b) => {
        const dateA = a.published ? new Date(a.published).getTime() : 0
        const dateB = b.published ? new Date(b.published).getTime() : 0
        return dateA - dateB
      })
    case 'length':
      // sort the books by length
      return originalBooks.sort((a, b) => (a.length || 0) - (b.length || 0))
    default:
      // return the original books
      return originalBooks
  }
}

/**
 * Accepts the book object and returns an array of the unique series titles
 *
 * @param {Book[]} books - the book object
 * @returns {string[]} the unique series titles
 *
 */
export function getTheSeries(books: Book[]) {
  const originalBooks = [...books]
  const seriesObjectArray = originalBooks.map((book) => book.series)
  const seriesArray = seriesObjectArray
    .map((series) => (typeof series === 'string' ? series : series.title))
    .sort()
  const uniqueSeries = [...new Set(seriesArray)]
  return uniqueSeries
}

/**
 * Accepts the Book[] array, the author, and the series and returns a new array based on the filter parameters
 *
 * @param {Book[]} books - the book object
 * @param {string} author - the author
 * @param {string} series - the series
 * @returns {Book[]} the filtered book object
 *
 */
export function filterBooks(books: Book[], filter: string, value: string) {
  if (!books) {
    return []
  }

  const originalBooks = [...books]

  switch (filter) {
    case 'author':
      if (value === 'all') {
        return originalBooks
      } else {
        return originalBooks.filter((book) =>
          typeof book.author === 'string' ? book.author === value : book.author.name === value,
        )
      }
    case 'series':
      if (value === 'all') {
        return originalBooks
      } else {
        return originalBooks.filter((book) =>
          typeof book.series === 'string' ? book.series === value : book.series.title === value,
        )
      }
    default:
      return originalBooks
  }
}

// function to filter the books by the selected tags
/**
 * Accepts the book object and the selected tags and returns a new array based on the filter parameters
 *
 * @param {Book[]} books - the book object
 * @param {string[]} tags - the selected tags
 * @returns {Book[]} the filtered book object
 *
 */
export function filterBooksByTags(books: Book[], tags: string[]) {
  if (!books) {
    return []
  }

  const originalBooks = [...books]
  // filter books by the tag array. The returned books should contain all of the tags in the tag array
  if (tags.length > 0) {
    return originalBooks.filter((book) => {
      const bookTags = book.tags.map((tag) => (typeof tag === 'string' ? tag : tag.title))
      return tags.every((tag) => bookTags.includes(tag))
    })
  }
  return originalBooks
}

/**
 * Accepts the book object and the search string and returns a new array based on the search parameters
 *
 * @param {Book[]} books - the book object
 * @param {string} search - the search string
 * @returns {Book[]} the filtered book object
 *
 */
export function filterBooksBySearch(books: Book[], search: string) {
  if (!books) {
    return []
  }
  if (search === '') {
    return books
  }

  // Search the books by title, author, and series
  return books.filter((book) => {
    const bookTitle = book.title.toLowerCase()
    const bookAuthor =
      typeof book.author === 'string' ? book.author.toLowerCase() : book.author.name.toLowerCase()
    const bookSeries =
      typeof book.series === 'string' ? book.series.toLowerCase() : book.series.title.toLowerCase()
    return (
      bookTitle.includes(search.toLowerCase()) ||
      bookAuthor.includes(search.toLowerCase()) ||
      bookSeries.includes(search.toLowerCase())
    )
  })
}

/**
 * Accepts the book object and the settings object and returns a new array based on the filter parameters
 *
 * @param {Book[]} books - the book object
 * @param {BookSettingsType} settings - the settings object
 * @returns {Book[]} the filtered book object
 *
 */
export function filterBooksBySettings(books: Book[], settings: BookSettingsType) {
  // filter the books based on the filter value
  let newFilteredBooks = [...books]
  newFilteredBooks = filterBooks(newFilteredBooks, 'author', settings.author)
  newFilteredBooks = filterBooks(newFilteredBooks, 'series', settings.series)
  newFilteredBooks = filterBooksByTags(newFilteredBooks, settings.tags)
  newFilteredBooks = filterBooksBySearch(newFilteredBooks, settings.search)
  // sort the books based on the sort value
  const sortedBooks = sortBooksBy(newFilteredBooks, settings.sort)
  if (sortedBooks) {
    if (settings.order !== 'asc') {
      newFilteredBooks = sortedBooks.reverse().flat()
    } else {
      newFilteredBooks = sortedBooks.flat()
    }
  }
  return newFilteredBooks
}
