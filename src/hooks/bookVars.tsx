import { Book } from '@/payload-types'

export default function createBookVars(book: Book) {
  // Image Src and Alt
  const imageSrc =
    typeof book.image !== 'string' && book.image?.filename
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/file/${book.image.filename}`
      : ''
  const imageAlt = typeof book.image !== 'string' ? book.image?.alt || '' : ''
  // Book Info
  // const authorName = typeof book.author !== 'string' ? book.author?.name || '' : ''

  return { imageSrc, imageAlt }
}
