'use client'

import { LogOutIcon } from 'lucide-react'
import { useTransition } from 'react'
import { signOut } from '../../app/actions/auth'

export default function SignOutButton() {
  const [isPending, startTransition] = useTransition()

  const handleSignOut = () => {
    startTransition(async () => {
      await signOut()
    })
  }

  return (
    <button
      onClick={handleSignOut}
      disabled={isPending}
      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-2 rounded-md w-full text-gray-700 dark:text-gray-300 text-sm transition-colors"
    >
      <LogOutIcon size={20} className="mr-2" />
      <span>{isPending ? 'Signing out...' : 'Sign Out'}</span>
    </button>
  )
}
