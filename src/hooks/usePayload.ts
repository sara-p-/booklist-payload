import { getPayload } from 'payload'
import config from '@payload-config'

export default async function usePayload() {
  const payload = await getPayload({ config })
  const books = await payload.find({
    collection: 'books',
  })

  console.log({ books })

  return books
}
