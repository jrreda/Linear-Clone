import { Suspense } from 'react'
import Navigation from '../components/Navigation'
import DashboardSkeleton from '../components/DashboardSkeleton'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-0 pl-16 md:pl-64 min-h-screen">
        <div className="mx-auto p-4 md:p-8 max-w-6xl">
          <Suspense fallback={<DashboardSkeleton />}>{children}</Suspense>
        </div>
      </main>
    </div>
  )
}
