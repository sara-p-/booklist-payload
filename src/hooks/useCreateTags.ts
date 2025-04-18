import { Tag } from '@/payload-types'
import useGetStuff from './useGetStuff'
import { useBookContext } from '@/contexts/bookProvider'

export default function useCreateTags() {
  // get all the tags
  const { data: tagList } = useGetStuff('tags')
  // pull in the tags from the filtered books
  const { books } = useBookContext()
  // if the tagList is undefined, return an empty array
  if (tagList === undefined) {
    return []
  }
  // If a tag is not available due to the filtered books, 'disabled' should be true
  if (books !== undefined) {
    const bookTags = books
      .map((book) =>
        book.tags.map((tag) => {
          return typeof tag === 'string' ? tag : tag.title
        }),
      )
      .flat()
    const uniqueBookTags = [...new Set(bookTags)]

    const tagListTags = tagList.docs.map((tag: Tag) => tag.title)
    const disabledTags = tagListTags.filter((tag: string) => !uniqueBookTags.includes(tag))
    const finalTags = tagListTags.map((tag: string) => {
      if (disabledTags.includes(tag)) {
        return { title: tag, disabled: true }
      }
      return { title: tag, disabled: false }
    })

    return finalTags
  } else {
    return tagList.docs.map((tag: Tag) => {
      return { title: tag.title, disabled: false }
    })
  }
}
