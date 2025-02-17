import { Book } from '@/payload-types'

export default function useCreateTags(books: Book[]) {
  const allTags = books.map((book) => {
    if (book.tags && typeof book.tags === 'object') {
      return book.tags.map((tag) =>
        typeof tag === 'string' ? { tag, id: tag } : { tag: tag.title, id: tag.id },
      )
    } else {
      return []
    }
  })

  const uniqueTags = [...new Set(allTags.flat())]

  return uniqueTags
}
