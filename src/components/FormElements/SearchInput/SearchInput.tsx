'use client'

import React from 'react'
import styles from './SearchInput.module.css'
import VisuallyHidden from '@/components/VisuallyHidden/VisuallyHidden'

type InputProps = {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  icon?: React.ReactNode
  args?: React.InputHTMLAttributes<HTMLInputElement>
}

export default function SearchInput({
  label,
  placeholder,
  icon,
  args,
  onChange,
  value,
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="" className={styles.label}>
        {icon}
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        {...args}
      />
    </div>
  )
}
