import { Book } from '@/payload-types'
import { useBookContext } from '@/contexts/bookProvider'

export default function useCreateDropdownOptions() {
  // Get the current books
  const { books } = useBookContext()

  // Get the authors and series from the current books
  const authors =
    books?.map((book: Book) => ({
      name: typeof book.author === 'string' ? book.author : book.author.name,
      id: typeof book.author === 'string' ? book.author : book.author.id,
    })) || []

  // Remove duplicates from the authors array
  const uniqueAuthors = authors.filter(
    (author, index, self) => index === self.findIndex((t) => t.id === author.id),
  )

  // Get the series from the current books
  const series =
    books?.map((book: Book) => ({
      name: typeof book.series === 'string' ? book.series : book.series.title,
      id: typeof book.series === 'string' ? book.series : book.series.id,
    })) || []

  // Remove duplicates from the series array
  const uniqueSeries = series.filter(
    (series, index, self) => index === self.findIndex((t) => t.id === series.id),
  )

  return {
    authors: uniqueAuthors,
    series: uniqueSeries,
  }
}
