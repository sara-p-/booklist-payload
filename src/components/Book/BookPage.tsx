import { Book } from '@/payload-types'
import styles from './BookPage.module.css'
import bookVars from '@/hooks/bookVars'
import Image from 'next/image'
import DescriptionBlock from './DescriptionBlock'

interface BookPageProps {
  book: Book
}

export default function BookPage({ book }: BookPageProps) {
  const {
    title,
    imageSrc,
    imageAlt,
    author,
    series,
    bookNumber,
    published,
    rating,
    tags,
    description,
    notes,
  } = bookVars(book)

  return (
    <div className={styles.bookPage}>
      <div className={styles.bookContent}>
        <div className={styles.bookImage}>
          <Image src={imageSrc} alt={imageAlt} width={200} height={300} />
        </div>
        <div className={styles.bookInfo}>
          <h1 className={`${styles.bookTitle}`}>{title}</h1>
          <h2 className={`${styles.bookAuthor}`}>{author}</h2>
          <p className={`${styles.bookSeries} ${styles.bookItems}`}>
            <strong>series:</strong> {series}
          </p>
          <p className={`${styles.bookNumber} ${styles.bookItems}`}>
            <strong>book #:</strong> {bookNumber}
          </p>
          <p className={`${styles.bookPublished} ${styles.bookItems}`}>
            <strong>published:</strong> {published}
          </p>
          <p className={`${styles.bookRating} ${styles.bookItems}`}>
            <strong>rating:</strong> {rating}/10
          </p>
        </div>
      </div>
      <div className={styles.bookTagsSection}>
        <h3 className={styles.bookTagsTitle}>tags:</h3>
        <p className={`${styles.bookTags} ${styles.bookItems}`}>
          <span className={styles.bookTagsList}>
            {typeof tags === 'string'
              ? tags
              : tags.map((tag, index) => {
                  const tagId = typeof tag === 'string' ? tag : tag.id
                  const tagTitle = typeof tag === 'string' ? tag : tag.title
                  if (index === tags.length - 1) {
                    return <span key={tagId}>{tagTitle}</span>
                  }
                  return <span key={tagId}>{tagTitle}, </span>
                })}
          </span>
        </p>
      </div>
      <DescriptionBlock description={description} title="description" />
      {notes && <DescriptionBlock description={notes} title="notes" />}
    </div>
  )
}
