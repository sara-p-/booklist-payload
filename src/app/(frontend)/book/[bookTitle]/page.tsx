import React from 'react'
import BookPageSidebar from '@/components/Sidebar/BookPageSidebar'
import MainBookContent from '@/components/MainContent/MainBookContent'
export default async function BookPage({ params }: { params: Promise<{ bookTitle: string }> }) {
  const { bookTitle } = await params

  console.log(bookTitle)

  return (
    <div className="bookPage">
      <BookPageSidebar />
      <MainBookContent bookTitle={bookTitle} />
    </div>
  )
}
