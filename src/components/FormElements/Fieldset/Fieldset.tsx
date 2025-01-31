import React from 'react'
import styles from './Fieldset.module.css'

type FieldsetProps = {
  children: React.ReactNode
  title: string
}

export default function Fieldset({ children, title }: FieldsetProps) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{title}</legend>
      <div className={styles.wrapper}>{children}</div>
    </fieldset>
  )
}
