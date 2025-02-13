'use client'

import React from 'react'
import * as Select from '@radix-ui/react-select'
import styles from './SelectField.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type SelectFieldProps = {
  options: string[]
  label: string
  onChange?: (value: string) => void
}

export default function SelectField({ options, label, onChange }: SelectFieldProps) {
  const [value, setValue] = React.useState('')

  function handleChange(value: string) {
    setValue(value)
    onChange?.(value)
  }

  return (
    <Select.Root value={value} onValueChange={handleChange}>
      <Select.Trigger className={styles.trigger}>
        <Select.Value placeholder={label} />
        <Select.Icon>
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
