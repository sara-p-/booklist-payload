import { useBookSettings } from '@/contexts/bookSettingsProvider'

export function useHandleFilterChange() {
  const { bookSettings, setBookSettings } = useBookSettings()

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

  return { handleFilterChange }
}
