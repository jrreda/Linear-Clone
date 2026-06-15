import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="flex flex-col justify-center bg-gray-50 dark:bg-[#121212] sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="font-extrabold text-gray-900 dark:text-white text-3xl text-center">
          Mode
        </h1>
        <h2 className="mt-2 font-bold text-gray-900 dark:text-white text-2xl text-center">
          Create a new account
        </h2>
      </div>

      <div className="sm:mx-auto mt-8 sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-[#1A1A1A] shadow px-4 sm:px-10 py-8 border border-gray-100 dark:border-dark-border-subtle sm:rounded-lg">
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Already have an account?{' '}
              <Link
                href="/signin"
                className="font-medium text-gray-900 hover:text-gray-700 dark:hover:text-gray-100 dark:text-gray-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
