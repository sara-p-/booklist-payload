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
          <p className={styles.bookAuthor}>{author}</p>
          <p className={styles.bookSeries}>{series}</p>
          <p className={styles.bookNumber}>{bookNumber}</p>
          <p className={styles.bookPublished}>{published}</p>
          <p className={styles.bookRating}>{rating}</p>
        </div>
        <div className={styles.bookTags}>
          <p>
            tags:{' '}
            {typeof tags === 'string'
              ? tags
              : tags.map((tag) => {
                  return <span key={tag.id}>{tag.title}</span>
                })}
          </p>
        </div>
      </div>
    </div>
  )
}
