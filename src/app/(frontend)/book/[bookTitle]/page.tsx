import React from 'react'
import BookPageSidebar from '@/components/Sidebar/BookPageSidebar'
import MainBookContent from '@/components/MainContent/MainBookContent'
import { Suspense } from 'react'

export default async function BookPage({ params }: { params: Promise<{ bookTitle: string }> }) {
  const { bookTitle } = await params

  console.log(bookTitle)

  return (
    <div className="bookPage">
      <Suspense fallback={<div>Loading...</div>}>
        <BookPageSidebar />
        <MainBookContent bookTitle={bookTitle} />
      </Suspense>
    </div>
  )
}
