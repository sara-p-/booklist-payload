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

type SidebarProps = {
  books: Book[]
}

export default function Sidebar({ books }: SidebarProps) {
  let authorOptions: string[] = []
  if (books !== undefined) {
    authorOptions = books
      .map((book) => {
        if (typeof book.author !== 'string') {
          return book.author.name
        }
        return undefined
      })
      .filter((name): name is string => name !== undefined)
  }

  console.log(authorOptions)

  return (
    <div className={styles.sidebar}>
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
            label="series"
            placeholder="series"
            options={[
              { label: 'series', value: 'series' },
              { label: 'rating', value: 'rating' },
              { label: 'popularity', value: 'popularity' },
            ]}
          />
        </Fieldset>
        <Fieldset title="filters"></Fieldset>
        <Fieldset title="tags">
          <TagsBox>
            {['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9', 'tag10'].map(
              (tag) => (
                <CheckboxTag
                  key={tag}
                  label={tag}
                  value={tag}
                  name={tag}
                  checked={false}
                  // onChange={() => {}}
                />
              ),
            )}
          </TagsBox>
        </Fieldset>
      </div>
    </div>
  )
}
