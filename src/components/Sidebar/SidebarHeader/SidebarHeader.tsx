import React from 'react'
import styles from './SidebarHeader.module.css'
import {
  faList,
  faSortAlphaDown,
  faSortAlphaUp,
  faTableCells,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useViewContext } from '@/contexts/viewProvider'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
import { useFilteredBookContext } from '@/contexts/filteredBooksProvider'

export default function SidebarHeader() {
  const { listView, handleViewChange } = useViewContext()
  const { bookSettings, updateBookSettings } = useBookSettings()
  const { filteredBooks } = useFilteredBookContext()

  function orderChange(checked: boolean) {
    updateBookSettings({ ...bookSettings, order: checked ? 'desc' : 'asc' })
  }

  function viewChange(listView: boolean) {
    handleViewChange(listView)
  }

  return (
    <div className={styles.sidebarHeader}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{filteredBooks.length} books</h2>
        <div className={styles.actions}>
          <Checkbox.Root
            className={styles.actionCheckbox}
            value={listView ? 'list' : 'grid'}
            name="view"
            checked={!listView}
            onCheckedChange={viewChange}
          >
            {listView ? (
              <FontAwesomeIcon icon={faTableCells} style={{ width: '24px', height: 'auto' }} />
            ) : (
              <FontAwesomeIcon icon={faList} style={{ width: '24px', height: 'auto' }} />
            )}
          </Checkbox.Root>
          <Checkbox.Root
            className={styles.actionCheckbox}
            value={bookSettings.order}
            name="order"
            checked={bookSettings.order === 'desc'}
            onCheckedChange={orderChange}
          >
            {bookSettings.order === 'desc' ? (
              <FontAwesomeIcon icon={faSortAlphaUp} style={{ width: '24px', height: 'auto' }} />
            ) : (
              <FontAwesomeIcon icon={faSortAlphaDown} style={{ width: '24px', height: 'auto' }} />
            )}
          </Checkbox.Root>
        </div>
      </div>
    </div>
  )
}
