import { Book, Series } from '@/payload-types'

// Function that accepts the book object and the sort order and returns the sorted book object
export function sortBooksBy(books: Book[], sortBy: string) {
  const originalBooks = [...books]

  if (sortBy === 'series') {
    const seriesObjectArray = originalBooks.map((book) => book.series)
    const seriesArray = seriesObjectArray.map((series) =>
      typeof series === 'string' ? series : series.title,
    )
    const uniqueSeries = [...new Set(seriesArray)]

    return uniqueSeries
  }
}
