import { Tag } from '@/payload-types'
import useGetStuff from './useGetStuff'

export default function useCreateTags() {
  // pull in the tags
  const { data: tagList } = useGetStuff('tags')

  const tags = tagList !== undefined ? tagList?.docs?.map((tag: Tag) => tag.title) : []

  return tags
}
