'use client'

import React from 'react'
import styles from './Sidebar.module.css'
import Fieldset from '@/components/FormElements/Fieldset/Fieldset'
import SearchInput from '@/components/FormElements/SearchInput/SearchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SelectField from '@/components/FormElements/SelectField/SelectField'
import TagsBox from './TagsBox/TagsBox'
import CheckboxTag from '@/components/FormElements/CheckboxTag/CheckboxTag'
import useCreateDropdownOptions from '@/hooks/useCreateDropdownOptions'
import { SORT_FILTER_OPTIONS } from '@/global/global-variables'
import useCreateTags from '@/hooks/useCreateTags'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { useHandleFilterChange } from '@/hooks/useHandleFilterChange'

export default function Sidebar() {
  // Get settings from the 2 different providers
  const { bookSettings } = useBookSettings()
  // Function to set the changes in the book settings based on user input
  const { handleFilterChange } = useHandleFilterChange()

  // Create author and series dropdown options
  const { authors, series } = useCreateDropdownOptions()
  // Create tags
  const tags = useCreateTags()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.sidebar}>
      <div className={styles.wrapper}>
        <SidebarHeader />
        <Fieldset title="search">
          <SearchInput
            label="Search"
            placeholder="Search"
            icon={<FontAwesomeIcon icon={faSearch} style={{ width: '14px' }} />}
            value={bookSettings.search}
            onChange={(value) => {
              handleFilterChange('search', value)
            }}
          />
        </Fieldset>
        <Fieldset title="sort">
          <SelectField
            label="sort"
            options={SORT_FILTER_OPTIONS}
            onChange={(value) => handleFilterChange('sort', value)}
            value={bookSettings.sort}
          />
        </Fieldset>
        <Fieldset title="filters">
          <SelectField
            label="author"
            options={[{ name: 'all', id: 'all' }, ...authors]}
            onChange={(value) => handleFilterChange('author', value)}
            value={bookSettings.author}
          />
          <SelectField
            label="series"
            options={[{ name: 'all', id: 'all' }, ...series]}
            onChange={(value) => handleFilterChange('series', value)}
            value={bookSettings.series}
          />
        </Fieldset>
        <Fieldset title="tags">
          <TagsBox>
            {tags &&
              tags.map(({ title, disabled }: { title: string; disabled: boolean }) => (
                <CheckboxTag
                  key={title}
                  value={title}
                  checked={bookSettings.tags.includes(title)}
                  onChange={(value) => handleFilterChange('tags', value)}
                  disabled={disabled}
                />
              ))}
          </TagsBox>
        </Fieldset>
      </div>
    </form>
  )
}
