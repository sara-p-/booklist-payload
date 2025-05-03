'use client'
import './styles.css'
import BookListSidebar from '@/components/Sidebar/BookListSidebar'
import MainBookListContent from '@/components/MainContent/MainBookListContent'

export default function HomePage() {
  return (
    <div className="home">
      <BookListSidebar />
      <MainBookListContent />
    </div>
  )
}
