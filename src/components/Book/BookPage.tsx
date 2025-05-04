import { Book } from '@/payload-types'
import styles from './BookPage.module.css'
import bookVars from '@/hooks/bookVars'
import Image from 'next/image'

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
          <h1 className={styles.bookTitle}>{title}</h1>
          <h2 className={styles.bookAuthor}>{author}</h2>
          <p className={styles.bookSeries}>{series}</p>
          <p className={styles.bookNumber}>
            <strong>book number:</strong> {bookNumber}
          </p>
          <p className={styles.bookPublished}>
            <strong>published:</strong> {published}
          </p>
          <p className={styles.bookRating}>
            <strong>rating:</strong> {rating}/10
          </p>
        </div>
      </div>
      <div className={styles.bookTags}>
        <p>
          tags:{' '}
          {typeof tags === 'string'
            ? tags
            : tags.map((tag) => {
                const tagId = typeof tag === 'string' ? tag : tag.id
                const tagTitle = typeof tag === 'string' ? tag : tag.title
                return <span key={tagId}>{tagTitle}, </span>
              })}
        </p>
      </div>
    </div>
  )
}
