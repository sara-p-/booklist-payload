import styles from '@/components/MainContent/MainContent.module.css'
import bookStyles from '@/components/Book/BookButton.module.css'

export default function BookListLoading() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainWrapper}>
        <div className={`${styles.booksContainer} ${styles.gridView}`}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={bookStyles.bookLoading}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
