import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import styles from './CheckboxTag.module.css'

type CheckboxTagProps = {
  value: string
  checked: boolean
  onChange: (tag: string) => void
}

export default function CheckboxTag({ value, checked, onChange }: CheckboxTagProps) {
  return (
    <Checkbox.Root
      className={styles.checkbox}
      value={value}
      name={value}
      checked={checked}
      onCheckedChange={() => onChange(value)}
    >
      {value}
    </Checkbox.Root>
  )
}
