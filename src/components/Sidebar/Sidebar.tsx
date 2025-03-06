'use client'

import React, { useState } from 'react'
import styles from './Sidebar.module.css'
import Fieldset from '@/components/FormElements/Fieldset/Fieldset'
import SearchInput from '@/components/FormElements/SearchInput/SearchInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SelectField from '@/components/FormElements/SelectField/SelectField'
import TagsBox from './TagsBox/TagsBox'
import CheckboxTag from '@/components/FormElements/CheckboxTag/CheckboxTag'
import { Book } from '@/payload-types'
import { useBookContext } from '@/contexts/bookProvider'
import useCreateSelectOptions from '@/hooks/useCreateSelectOptions'
import { SORT_OPTIONS } from '@/global/global-variables'
import useCreateTags from '@/hooks/useCreateTags'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { SortType } from '@/types/types'

export default function Sidebar() {
  const { books } = useBookContext()
  const { bookSettings, setBookSettings } = useBookSettings()
  const [selectedSort, setSelectedSort] = React.useState<SortType>('series')
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [selectedAuthor, setSelectedAuthor] = React.useState<string | undefined>(undefined)
  const [selectedSeries, setSelectedSeries] = React.useState<string | undefined>(undefined)

  function handleSortChange(sort: SortType) {
    setBookSettings({ ...bookSettings, sort })
  }

  function handleTagChange(tag: string) {
    if (bookSettings.tags.includes(tag)) {
      setBookSettings({ ...bookSettings, tags: bookSettings.tags.filter((t) => t !== tag) })
    } else {
      setBookSettings({ ...bookSettings, tags: [...bookSettings.tags, tag] })
    }
  }

  function handleAuthorChange(author: string) {
    setSelectedAuthor(author)
  }

  function handleSeriesChange(series: string) {
    setSelectedSeries(series)
  }

  function handleFilterChange(filter: string, value: string) {
    if (filter === 'tags') {
      if (bookSettings.tags.includes(value)) {
        setBookSettings({ ...bookSettings, tags: bookSettings.tags.filter((t) => t !== value) })
      } else {
        setBookSettings({ ...bookSettings, tags: [...bookSettings.tags, value] })
      }
    } else {
      setBookSettings({ ...bookSettings, [filter]: value })
    }
  }

  const authorOptions = useCreateSelectOptions(books, 'author', 'name')
  const seriesOptions = useCreateSelectOptions(books, 'series', 'title')
  const tags = useCreateTags(books)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }

  console.log({ bookSettings })

  return (
    <form onSubmit={handleSubmit} className={styles.sidebar}>
      <div className={styles.wrapper}>
        <SidebarHeader />
        <Fieldset title="search">
          <SearchInput
            label="Search"
            placeholder="Search"
            icon={<FontAwesomeIcon icon={faSearch} style={{ width: '14px' }} />}
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
