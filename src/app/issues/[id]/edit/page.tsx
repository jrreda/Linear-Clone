import { getIssue } from '../../../../../lib/dal'
import IssueForm from '../../../components/IssueForm'
import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
export default async function EditIssuePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const issue = await getIssue(parseInt(id))

  if (!issue) {
    notFound()
  }

  return (
    <div className="mx-auto p-4 md:p-8 max-w-3xl">
      <Link
        href={`/issues/${id}`}
        className="inline-flex items-center mb-6 text-gray-600 hover:text-gray-900 dark:hover:text-gray-200 dark:text-gray-400 text-sm"
      >
        <ArrowLeftIcon size={16} className="mr-1" />
        Back to Issue
      </Link>

      <h1 className="mb-6 font-bold text-2xl">Edit Issue</h1>

      <div className="bg-white dark:bg-dark-elevated shadow-sm p-6 border border-gray-200 dark:border-dark-border-default rounded-lg">
        <IssueForm userId={issue.userId} issue={issue} isEditing />
      </div>
    </div>
  )
}
