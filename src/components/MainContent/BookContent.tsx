'use client'

import { useBookContext } from '@/contexts/bookProvider'

interface BookContentProps {
  bookId: string
}

export default function BookContent({ bookId }: BookContentProps) {
  const { books } = useBookContext()
  const book = books.find((book) => book.id === bookId)

  if (!book) return <div>Book not found</div>

  return (
    <div>
      <h1>{book.title}</h1>
    </div>
  )
}
