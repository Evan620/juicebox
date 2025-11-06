interface User {
  name: string
  avatar?: string
  initials?: string
}

interface AvatarStackProps {
  users: User[]
  max?: number
}

export default function AvatarStack({ users, max = 3 }: AvatarStackProps) {
  const displayUsers = users.slice(0, max)
  const remaining = users.length - max

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-orange-500',
    'bg-pink-500',
    'bg-indigo-500',
  ]

  return (
    <div className="flex -space-x-2">
      {displayUsers.map((user, index) => (
        <div
          key={index}
          className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium ${colors[index % colors.length]}`}
          title={user.name}
        >
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span>{user.initials || getInitials(user.name)}</span>
          )}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-gray-700 text-xs font-medium"
          title={`+${remaining} more`}
        >
          +{remaining}
        </div>
      )}
    </div>
  )
}

