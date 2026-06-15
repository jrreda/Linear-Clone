import Link from 'next/link'
import { Timestamp } from '../components/Timestamp'
import Button from '../components/ui/Button'

export default async function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-7xl">
          <div className="text-center">
            <h1 className="font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl md:text-6xl tracking-tight">
              Issue tracking <br className="hidden sm:block" />
              <span className="text-purple-600 dark:text-purple-400">
                simplified
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-gray-300 text-lg sm:text-xl">
              A minimal and elegant issue tracking tool for modern teams. Manage
              your projects with ease.
            </p>
            <div className="mt-10">
              <Link href="/signup">
                <Button size="lg">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-gray-200 dark:border-dark-border-subtle border-t">
        <div className="mx-auto px-4 sm:px-6 py-8 max-w-7xl">
          <div className="text-gray-500 dark:text-gray-400 text-sm text-center">
            <p>
              © <Timestamp /> Mode. Built for Next.js Fundamentals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
