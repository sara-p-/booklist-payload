import React from 'react'
import styles from './VisuallyHidden.module.css'

type VisuallyHiddenProps = {
  children: React.ReactNode
}

export default function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className={styles.visuallyHidden}>{children}</span>
}
