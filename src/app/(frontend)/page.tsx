// 'use client'
import './styles.css'
import BookListSidebar from '@/components/Sidebar/BookListSidebar'
import MainBookListContent from '@/components/MainContent/MainBookListContent'
import usePayload from '@/hooks/usePayload'

export default function HomePage() {
  const books = usePayload()
  console.log({ books: books.docs })
  return (
    <div className="home">
      <BookListSidebar />
      <MainBookListContent />
    </div>
  )
}
