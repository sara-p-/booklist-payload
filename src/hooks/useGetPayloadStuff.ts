import { getPayload } from 'payload'
import config from '@payload-config'
import { CollectionSlug } from 'payload'

const payload = await getPayload({ config })

export default async function useGetPayloadStuff() {
  const { docs, totalDocs } = await payload.find({
    collection: 'books',
  })

  return { docs, totalDocs }
}
