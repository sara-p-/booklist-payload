import { Tag } from '@/payload-types'
import useGetStuff from './useGetStuff'

export default function useCreateTags() {
  // pull in the tags
  const { data: tagList } = useGetStuff('tags')

  console.log({ tagList: tagList?.docs })

  const tags = tagList?.docs?.map((tag: Tag) => tag.title)

  return tags
}
