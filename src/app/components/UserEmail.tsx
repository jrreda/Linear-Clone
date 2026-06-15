import { getCurrentUser } from '../../../lib/dal'
import { UserIcon } from 'lucide-react'
import SignOutButton from './SignOutButton'

const UserEmail = async () => {
  const user = await getCurrentUser()

  return (
    <div className="space-y-1">
      <div className="flex justify-start items-center px-2 py-2">
        <UserIcon size={20} className="mr-2 text-gray-500" />
        <span className="hidden md:inline text-gray-700 dark:text-gray-300 text-sm truncate">
          {user?.email}
        </span>
      </div>
      <SignOutButton />
    </div>
  )
}

export default UserEmail
