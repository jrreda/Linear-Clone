import Link from 'next/link'
import { HomeIcon, PlusIcon, LogInIcon } from 'lucide-react'
import UserEmail from './UserEmail'
import { Suspense } from 'react'
import NavLink from './NavLink'

export default function Navigation() {
  return (
    <aside className="left-0 fixed inset-y-0 flex flex-col bg-gray-50 dark:bg-[#1A1A1A] px-2 md:px-4 py-4 border-gray-200 dark:border-dark-border-subtle border-r w-16 md:w-64">
      <div className="flex justify-center md:justify-start items-center mb-8 px-2">
        <Link
          href="/"
          className="font-bold text-gray-900 dark:text-white text-xl tracking-tight"
        >
          <span className="hidden md:inline">Mode</span>
          <span className="md:hidden">M</span>
        </Link>
      </div>

      <nav className="flex flex-col flex-1 space-y-1">
        <NavLink
          href="/dashboard"
          icon={<HomeIcon size={20} />}
          label="Dashboard"
        />
        <NavLink
          href="/issues/new"
          icon={<PlusIcon size={20} />}
          label="New Issue"
        />
      </nav>

      <div className="pt-4 border-gray-200 dark:border-dark-border-subtle border-t">
        <Suspense
          fallback={
            <NavLink
              href="/signin"
              icon={<LogInIcon size={20} />}
              label="Sign In"
            />
          }
        >
          <UserEmail />
        </Suspense>
      </div>
    </aside>
  )
}
