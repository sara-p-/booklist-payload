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
import { Book } from '@/payload-types'
import { useBookContext } from '@/contexts/bookProvider'
import useCreateSelectOptions from '@/hooks/useCreateSelectOptions'
import { SORT_OPTIONS } from '@/global/global-variables'
import useCreateTags from '@/hooks/useCreateTags'

export default function Sidebar() {
  const { books } = useBookContext()

  // console.log(books)

  const authorOptions = useCreateSelectOptions(books, 'author', 'name')
  const seriesOptions = useCreateSelectOptions(books, 'series', 'title')
  const tags = useCreateTags(books)

  console.log(tags)

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
          />
        </Fieldset>
        <Fieldset title="sort">
          <SelectField label="series" options={SORT_OPTIONS} />
        </Fieldset>
        <Fieldset title="filters">
          <SelectField label="author" options={authorOptions} />
          <SelectField label="series" options={seriesOptions} />
        </Fieldset>
        <Fieldset title="tags">
          <TagsBox>
            {tags.map((tag) => (
              <CheckboxTag
                key={tag.id}
                label={tag.tag}
                value={tag.tag}
                name={tag.tag}
                checked={false}
                onChange={() => {}}
              />
            ))}
          </TagsBox>
        </Fieldset>
      </div>
    </form>
  )
}
