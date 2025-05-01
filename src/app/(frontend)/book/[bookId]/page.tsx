import BookContent from '@/components/MainContent/BookContent'
import React from 'react'

export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const { bookId } = await params

  console.log(bookId)

  return <BookContent bookId={bookId} />
}
