import styles from './MainContent.module.css'
import { useViewContext } from '@/contexts/viewProvider'
import { useFilteredBookContext } from '@/contexts/filteredBooksProvider'
import { addSeriesToBooks } from '@/utils/array-utils'
import useBookList from '@/hooks/useBookList'
import BookButton from '../BookButton/BookButton'

export default function MainContent() {
  const { listView } = useViewContext()
  const { filteredBooks } = useFilteredBookContext()
  const booksWithSeries = addSeriesToBooks(filteredBooks)
  const { renderBookList } = useBookList({ books: booksWithSeries })

  const booksContainerClass = listView ? styles.listView : styles.gridView

  return (
    <div className={styles.mainContent}>
      <div className={styles.mainWrapper}>
        <div className={`${styles.booksContainer} ${booksContainerClass}`}>{renderBookList()}</div>
      </div>
    </div>
  )
}
