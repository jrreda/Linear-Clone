import { getCurrentUser, getIssues } from '../../../lib/dal'
import Link from 'next/link'
import Button from '../components/ui/Button'
import { PlusIcon } from 'lucide-react'
import Badge from '../components/ui/Badge'
import { formatRelativeTime } from '../../../lib/utils'
import { Priority, Status } from '../../../lib/types'
import { ISSUE_STATUS, ISSUE_PRIORITY } from '../../../db/schema'

export default async function DashboardPage() {
  await getCurrentUser()
  const issues = await getIssues()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-2xl">Issues</h1>
        <Link href="/issues/new">
          <Button>
            <span className="flex items-center">
              <PlusIcon size={18} className="mr-2" />
              New Issue
            </span>
          </Button>
        </Link>
      </div>

      {issues.length > 0 ? (
        <div className="bg-white dark:bg-dark-high shadow-sm border border-gray-200 dark:border-dark-border-default rounded-lg overflow-hidden">
          {/* Header row */}
          <div className="gap-4 grid grid-cols-12 bg-gray-50 dark:bg-dark-elevated px-6 py-3 border-gray-200 dark:border-dark-border-default border-b font-medium text-gray-500 dark:text-gray-400 text-sm">
            <div className="col-span-5">Title</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Priority</div>
            <div className="col-span-3">Created</div>
          </div>

          {/* Issue rows */}
          <div className="dark:divide-dark-border-default divide-y divide-gray-200">
            {issues.map((issue) => (
              <Link
                key={issue.id}
                href={`/issues/${issue.id}`}
                className="block hover:bg-gray-50 dark:hover:bg-dark-elevated transition-colors"
              >
                <div className="items-center gap-4 grid grid-cols-12 px-6 py-4">
                  <div className="col-span-5 font-medium truncate">
                    {issue.title}
                  </div>
                  <div className="col-span-2">
                    <Badge status={issue.status as Status}>
                      {ISSUE_STATUS[issue.status as Status].label}
                    </Badge>
                  </div>
                  <div className="col-span-2">
                    <Badge priority={issue.priority as Priority}>
                      {ISSUE_PRIORITY[issue.priority as Priority].label}
                    </Badge>
                  </div>
                  <div className="col-span-3 text-gray-500 dark:text-gray-400 text-sm">
                    {formatRelativeTime(new Date(issue.createdAt))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-white dark:bg-dark-high p-8 py-12 border border-gray-200 dark:border-dark-border-default rounded-lg text-center">
          <h3 className="mb-2 font-medium text-lg">No issues found</h3>
          <p className="mb-6 text-gray-500 dark:text-gray-400">
            Get started by creating your first issue.
          </p>
          <Link href="/issues/new">
            <Button>
              <span className="flex items-center">
                <PlusIcon size={18} className="mr-2" />
                Create Issue
              </span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}