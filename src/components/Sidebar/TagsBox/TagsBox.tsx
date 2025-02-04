import React from 'react'
import styles from './TagsBox.module.css'

type TagsBoxProps = {
  children: React.ReactNode
}

export default function TagsBox({ children }: TagsBoxProps) {
  return <div className={styles.tagsBox}>{children}</div>
}
