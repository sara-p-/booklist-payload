import { Book } from '@/payload-types'

// Function that accepts the book object and the sort order and returns the sorted book object
export function sortBooksBy(books: Book[], sortBy: string) {
  const originalBooks = [...books]
  if (sortBy === 'series') {
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
    return seriesBooks.flat()
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
