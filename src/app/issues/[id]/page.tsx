import { getIssue } from '../../../../lib/dal'
import { formatRelativeTime } from '../../../../lib/utils'
import { Priority, Status } from '../../../../lib/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Badge from '@/app/components/ui/Badge'
import Button from '@/app/components/ui/Button'
import { ArrowLeftIcon, Edit2Icon } from 'lucide-react'
import DeleteIssueButton from '../../components/DeleteIssueButton'

export default async function IssuePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const issue = await getIssue(parseInt(id))

  if (!issue) {
    notFound()
  }

  const { title, description, status, priority, createdAt, updatedAt, user } =
    issue

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'backlog':
        return 'Backlog'
      case 'todo':
        return 'Todo'
      case 'in_progress':
        return 'In Progress'
      case 'done':
        return 'Done'
      default:
        return status
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'low':
        return 'Low'
      case 'medium':
        return 'Medium'
      case 'high':
        return 'High'
      default:
        return priority
    }
  }

  return (
    <div className="mx-auto p-4 md:p-8 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center mb-4 text-gray-600 hover:text-gray-900 dark:hover:text-gray-200 dark:text-gray-400 text-sm"
        >
          <ArrowLeftIcon size={16} className="mr-1" />
          Back to Issues
        </Link>
        <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4">
          <h1 className="font-bold text-3xl">{title}</h1>
          <div className="flex items-center space-x-2">
            <Link href={`/issues/${id}/edit`}>
              <Button variant="outline" size="sm">
                <span className="flex items-center">
                  <Edit2Icon size={16} className="mr-1" />
                  Edit
                </span>
              </Button>
            </Link>
            <DeleteIssueButton id={parseInt(id)} />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-dark-elevated shadow-sm mb-8 p-6 border border-gray-200 dark:border-dark-border-default rounded-lg">
        <div className="flex flex-wrap gap-3 mb-6">
          <Badge status={status as Status}>{getStatusLabel(status)}</Badge>
          <Badge priority={priority as Priority}>
            {getPriorityLabel(priority)}
          </Badge>
          <div className="text-gray-500 text-sm">
            Created {formatRelativeTime(new Date(createdAt))}
          </div>
          {updatedAt !== createdAt && (
            <div className="text-gray-500 text-sm">
              Updated {formatRelativeTime(new Date(updatedAt))}
            </div>
          )}
        </div>

        {description ? (
          <div className="dark:prose-invert max-w-none prose">
            <p className="whitespace-pre-line">{description}</p>
          </div>
        ) : (
          <p className="text-gray-500 italic">No description provided.</p>
        )}
      </div>

      <div className="bg-white dark:bg-dark-elevated shadow-sm p-6 border border-gray-200 dark:border-dark-border-default rounded-lg">
        <h2 className="mb-2 font-medium text-lg">Details</h2>
        <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className="mb-1 font-medium text-gray-500 text-sm">
              Assigned to
            </p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="mb-1 font-medium text-gray-500 text-sm">Status</p>
            <Badge status={status as Status}>{getStatusLabel(status)}</Badge>
          </div>
          <div>
            <p className="mb-1 font-medium text-gray-500 text-sm">Priority</p>
            <Badge priority={priority as Priority}>
              {getPriorityLabel(priority)}
            </Badge>
          </div>
          <div>
            <p className="mb-1 font-medium text-gray-500 text-sm">Created</p>
            <p>{formatRelativeTime(new Date(createdAt))}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
