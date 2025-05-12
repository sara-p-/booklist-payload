import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText } from '@payloadcms/richtext-lexical/react'
import styles from './BookPage.module.css'

interface DescriptionBlockProps {
  description: SerializedEditorState | null
  title?: string
}

export default function DescriptionBlock({ description, title }: DescriptionBlockProps) {
  if (!description) return null

  return (
    <div className={styles.descriptionBlock}>
      {title && <h3 className={styles.descriptionTitle}>{title}:</h3>}
      <RichText data={description} className={styles.description} />
    </div>
  )
}
