'use client'

import React from 'react'
import * as Select from '@radix-ui/react-select'
import styles from './SelectField.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { useBookSettings } from '@/contexts/bookSettingsProvider'

type SelectFieldProps = {
  options: string[]
  label: string
  onChange: (value: string) => void
  value: string | undefined
}

export default function SelectField({ options, label, onChange, value }: SelectFieldProps) {
  // const { bookSettings, setBookSettings } = useBookSettings()

  function handleChange(value: string | undefined) {
    if (value === undefined) {
      onChange('')
    } else {
      onChange(value)
    }
  }

  return (
    <Select.Root value={value} onValueChange={handleChange}>
      <Select.Trigger className={styles.trigger}>
        <Select.Value className={styles.value} placeholder={label} asChild={true}>
          <span className={styles.label}>{`${label}: ${value}`}</span>
        </Select.Value>
        <Select.Icon className={styles.icon}>
          <FontAwesomeIcon icon={faChevronDown} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.content} position="popper" align="start" sideOffset={0}>
          <Select.Viewport>
            {options.map((option, index) => (
              <Select.Item key={index} value={option} className={styles.item}>
                <Select.ItemText>{option}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
