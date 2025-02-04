import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import styles from './CheckboxTag.module.css'

type CheckboxTagProps = {
  label: string
  value: string
  name: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function CheckboxTag({ label, value, name, checked, onChange }: CheckboxTagProps) {
  return (
    <Checkbox.Root
      className={styles.checkbox}
      value={value}
      name={name}
      checked={checked}
      onCheckedChange={onChange}
    >
      {label}
    </Checkbox.Root>
  )
}
