import { Book } from '@/payload-types'

// Function that accepts the book object and the sort order and returns the sorted book object
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
      return originalBooks.sort((a, b) => a.title.localeCompare(b.title))
    case 'rating':
      return originalBooks.sort((a, b) => b.rating - a.rating)
    case 'published':
      return originalBooks.sort((a, b) => {
        const dateA = a.published ? new Date(a.published).getTime() : 0
        const dateB = b.published ? new Date(b.published).getTime() : 0
        return dateA - dateB
      })
    case 'length':
      return originalBooks.sort((a, b) => (a.length || 0) - (b.length || 0))
    default:
      return originalBooks
  }
}

// Function that accepts the book object and returns an array of the unique series titles
export function getTheSeries(books: Book[]) {
  const originalBooks = [...books]
  const seriesObjectArray = originalBooks.map((book) => book.series)
  const seriesArray = seriesObjectArray
    .map((series) => (typeof series === 'string' ? series : series.title))
    .sort()
  const uniqueSeries = [...new Set(seriesArray)]
  return uniqueSeries
}
