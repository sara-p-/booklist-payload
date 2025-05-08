import BookListLoading from '@/components/Loading/BookListLoading'
import BookListSidebar from '@/components/Sidebar/BookListSidebar'

export default function Loading() {
  return (
    <div className="home">
      <BookListSidebar />
      <BookListLoading />
    </div>
  )
}
