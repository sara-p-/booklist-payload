import BookPageContent from '@/components/MainContent/BookPageContent'
import React from 'react'

export default async function BookPage({ params }: { params: Promise<{ bookTitle: string }> }) {
  const { bookTitle } = await params

  console.log(bookTitle)

  return <BookPageContent bookTitle={bookTitle} />
}
