import Link from 'next/link'
import { Timestamp } from '../components/Timestamp'
import Button from '../components/ui/Button'

export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white dark:bg-dark-base border-gray-200 dark:border-dark-border-subtle border-b">
        <div className="flex justify-between items-center mx-auto px-4 h-16 container">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-bold text-xl">
              Mode
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/features"
                className="font-medium hover:text-purple-600 text-sm"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="font-medium hover:text-purple-600 text-sm"
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="font-medium hover:text-purple-600 text-sm"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4">
              <Link href="/signin">
                <Button variant="outline">Sign in</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-white dark:bg-dark-base border-gray-200 dark:border-dark-border-subtle border-t">
        <div className="mx-auto px-4 py-8 container">
          <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-lg">Mode</h3>
              <p className="text-gray-600 text-sm">
                A modern project management tool built with Next.js.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-sm">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-gray-600 hover:text-purple-600 text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-600 hover:text-purple-600 text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-600 hover:text-purple-600 text-sm"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-sm">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-600 hover:text-purple-600 text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/yourusername/mode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 text-sm"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-sm">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-purple-600 text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center">
            <p className="text-gray-600 text-sm">
              &copy; <Timestamp /> Mode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
