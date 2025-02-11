import { Book } from '@/payload-types'

export default function createBookVars(book: Book) {
  // Image Src and Alt
  const imageSrc =
    typeof book.image !== 'string' && book.image?.filename
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/file/${book.image.filename}`
      : ''
  const imageAlt = typeof book.image !== 'string' ? book.image?.alt || '' : ''
  // Book Info
  const author = typeof book.author !== 'string' ? book.author?.name || '' : ''
  const series = typeof book.series !== 'string' ? book.series.title || '' : ''
  const bookNumber = typeof book.bookNumber !== 'string' ? book.bookNumber || '' : ''
  const published = typeof book.published !== 'string' ? book.published || '' : ''
  const description = typeof book.description !== 'string' ? book.description || '' : ''
  const rating = typeof book.rating !== 'string' ? book.rating || '' : ''

  return { imageSrc, imageAlt, author, series, bookNumber, published, description, rating }
}
