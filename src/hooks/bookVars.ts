import { Book } from '@/payload-types'

export default function createBookVars(book: Book) {
  // Image Src and Alt
  const imageSrc =
    typeof book.image !== 'string' && book.image?.filename
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/file/${book.image.filename}`
      : ''
  const imageAlt = typeof book.image !== 'string' ? book.image?.alt || '' : ''
  // Book Info
  const title = typeof book.title !== 'string' ? book.title || '' : ''
  const author = typeof book.author !== 'string' ? book.author?.name || '' : ''
  const series = typeof book.series !== 'string' ? book.series.title || '' : ''
  const bookNumber = typeof book.bookNumber !== 'string' ? book.bookNumber || '' : ''
  const publishedDate = typeof book.published === 'string' ? new Date(book.published) : ''
  const published = publishedDate
    ? publishedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        // month: 'long',
        // day: 'numeric',
      })
    : ''
  const length = typeof book.length !== 'string' ? book.length || '' : ''
  const description = typeof book.description !== 'string' ? book.description || '' : ''
  const rating = typeof book.rating !== 'string' ? book.rating || '' : ''
  const tags = typeof book.tags !== 'string' ? book.tags || '' : ''
  const notes = typeof book.notes !== 'string' ? book.notes || '' : ''

  return {
    imageSrc,
    imageAlt,
    title,
    author,
    series,
    bookNumber,
    published,
    length,
    description,
    rating,
    tags,
    notes,
  }
}
