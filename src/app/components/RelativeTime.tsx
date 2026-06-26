'use client'

import { useEffect, useState } from 'react'
import { formatRelativeTime } from '../../../lib/utils'

export function RelativeTime({ date }: { date: Date | string }) {
  // Computed after mount so the current time is only read in the browser,
  // never during the server prerender (Cache Components disallows that).
  const [relative, setRelative] = useState<string | null>(null)

  useEffect(() => {
    setRelative(formatRelativeTime(date))
  }, [date])

  return <>{relative}</>
}
