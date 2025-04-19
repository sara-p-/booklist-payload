import { Book, Tag } from '@/payload-types'

/**
 * Accepts the book object and the sort order and returns the sorted book object
 *
 * @param {Book[]} books - the book object
 * @param {string} sortBy - the sort order
 * @returns {Book[]} the sorted book object
 *
 */
export function sortBooksBy(books: Book[], sortBy: string) {
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
  const originalBooks = [...books]

  switch (filter) {
    case 'author':
      return originalBooks.filter((book) =>
        typeof book.author === 'string' ? book.author === value : book.author.name === value,
      )
    case 'series':
      return originalBooks.filter((book) =>
        typeof book.series === 'string' ? book.series === value : book.series.title === value,
      )
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
