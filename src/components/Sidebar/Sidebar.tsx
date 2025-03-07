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
import { useBookContext } from '@/contexts/bookProvider'
import useCreateDropdownOptions from '@/hooks/useCreateDropdownOptions'
import { SORT_OPTIONS } from '@/global/global-variables'
import useCreateTags from '@/hooks/useCreateTags'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { useHandleFilterChange } from '@/hooks/useHandleFilterChange'

export default function Sidebar() {
  // Get books and settings from the 2 different providers
  const { books } = useBookContext()
  const { bookSettings } = useBookSettings()
  // Function to set the changes in the book settings based on user input
  const { handleFilterChange } = useHandleFilterChange()
  // Create author and series dropdown options
  const { authorOptions, seriesOptions } = useCreateDropdownOptions()
  // Create tags
  const tags = useCreateTags(books)

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
            onChange={(value) => handleFilterChange('search', value)}
          />
        </Fieldset>
        <Fieldset title="sort">
          <SelectField
            label="sort"
            options={SORT_OPTIONS}
            onChange={(value) => handleFilterChange('sort', value)}
            value={bookSettings.sort}
          />
        </Fieldset>
        <Fieldset title="filters">
          <SelectField
            label="author"
            options={authorOptions}
            onChange={(value) => handleFilterChange('author', value)}
            value={bookSettings.author}
          />
          <SelectField
            label="series"
            options={seriesOptions}
            onChange={(value) => handleFilterChange('series', value)}
            value={bookSettings.series}
          />
        </Fieldset>
        <Fieldset title="tags">
          <TagsBox>
            {tags.map((tag) => (
              <CheckboxTag
                key={tag.id}
                value={tag.tag}
                checked={bookSettings.tags.includes(tag.tag)}
                onChange={(value) => handleFilterChange('tags', value)}
              />
            ))}
          </TagsBox>
        </Fieldset>
      </div>
    </form>
  )
}
