import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'
import NewIssue from '../../components/NewIssue'

export default async function NewIssuePage() {
  return (
    <div className="mx-auto p-4 md:p-8 max-w-3xl">
      <Link
        href="/dashboard"
        className="inline-flex items-center mb-6 text-gray-600 hover:text-gray-900 dark:hover:text-gray-200 dark:text-gray-400 text-sm"
      >
        <ArrowLeftIcon size={16} className="mr-1" />
        Back to Dashboard
      </Link>

      <h1 className="mb-6 font-bold text-2xl">Create New Issue</h1>

      <div className="bg-white dark:bg-dark-elevated shadow-sm p-6 border border-gray-200 dark:border-dark-border-default rounded-lg">
        <Suspense fallback={<div>Loading...</div>}>
          <NewIssue />
        </Suspense>
      </div>
    </div>
  )
}