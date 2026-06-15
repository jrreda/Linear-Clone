export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header skeleton: simulating the page title and New Issue button */}
      <div className="flex justify-between items-center mb-8">
        <div className="bg-gray-300 dark:bg-gray-600 rounded w-32 h-8" />
        <div className="bg-gray-300 dark:bg-gray-600 rounded w-36 h-10" />
      </div>
      {/* Skeleton for issues list */}
      <div className="bg-white dark:bg-dark-high shadow-sm border border-gray-200 dark:border-dark-border-default rounded-lg overflow-hidden">
        {/* Header row skeleton */}
        <div className="gap-4 grid grid-cols-12 bg-gray-50 dark:bg-dark-elevated px-6 py-3 border-gray-200 dark:border-dark-border-default border-b">
          <div className="col-span-5 bg-gray-300 dark:bg-gray-600 rounded h-4" />
          <div className="col-span-2 bg-gray-300 dark:bg-gray-600 rounded h-4" />
          <div className="col-span-2 bg-gray-300 dark:bg-gray-600 rounded h-4" />
          <div className="col-span-3 bg-gray-300 dark:bg-gray-600 rounded h-4" />
        </div>
        {/* Issue row skeletons */}
        <div className="dark:divide-dark-border-default divide-y divide-gray-200">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="items-center gap-4 grid grid-cols-12 px-6 py-4"
            >
              <div className="col-span-5 bg-gray-300 dark:bg-gray-600 rounded h-4" />
              <div className="col-span-2 bg-gray-300 dark:bg-gray-600 rounded h-4" />
              <div className="col-span-2 bg-gray-300 dark:bg-gray-600 rounded h-4" />
              <div className="col-span-3 bg-gray-300 dark:bg-gray-600 rounded h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
