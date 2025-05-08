import './styles.css'
import BookListSidebar from '@/components/Sidebar/BookListSidebar'
import MainBookListContent from '@/components/MainContent/MainBookListContent'
import { Suspense } from 'react'
import BookListLoading from '@/components/Loading/BookListLoading'

export default function HomePage() {
  return (
    <div className="home">
      <BookListSidebar />
      <Suspense fallback={<BookListLoading />}>
        <MainBookListContent />
      </Suspense>
    </div>
  )
}
