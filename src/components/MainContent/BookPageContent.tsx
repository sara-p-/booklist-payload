'use client'

import { useBookContext } from '@/contexts/bookProvider'
import { slugify } from '@/utils/helpers'

interface BookPageContentProps {
  bookTitle: string
}

export default function BookPageContent({ bookTitle }: BookPageContentProps) {
  const { books } = useBookContext()
  const book = books.find((book) => slugify(book.title) === bookTitle)

  if (!book) return <div>Book not found</div>

  return (
    <div>
      <h1>{book.title}</h1>
    </div>
  )
}
