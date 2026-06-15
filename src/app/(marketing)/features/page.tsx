import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="mx-auto px-4 py-12 container">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl">Features</h1>
        <p className="text-gray-400 text-xl">
          Discover how Linear Clone can help you manage your projects more
          efficiently.
        </p>
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <FeatureCard
          title="Issue Tracking"
          description="Create, assign, and track issues with ease. Set priorities, due dates, and statuses to keep your team on track."
        />
        <FeatureCard
          title="Intuitive UI"
          description="A clean, modern interface that makes project management a breeze. No clutter, just what you need to get work done."
        />
        <FeatureCard
          title="Collaboration"
          description="Work together seamlessly. Comment on issues, mention team members, and keep everyone in the loop."
        />
        <FeatureCard
          title="Custom Workflows"
          description="Create workflows that match your team's process. Customize statuses, labels, and more."
        />
        <FeatureCard
          title="Real-time Updates"
          description="See changes as they happen. No need to refresh or wait for updates."
        />
        <FeatureCard
          title="Powerful Search"
          description="Find anything instantly with our powerful search. Filter by assignee, status, priority, and more."
        />
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="bg-gray-800 shadow-sm p-6 border border-gray-700 rounded-lg">
      <h3 className="mb-2 font-semibold text-white text-xl">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

interface PlanCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  highlighted?: boolean
}

function PlanCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
}: PlanCardProps) {
  return (
    <div
      className={`rounded-lg p-6 ${
        highlighted
          ? 'bg-purple-900 border-2 border-purple-700 shadow-md'
          : 'bg-gray-800 border border-gray-700 shadow-sm'
      }`}
    >
      <h3 className="mb-2 font-bold text-white text-xl">{title}</h3>
      <div className="mb-4">
        <span className="font-bold text-white text-3xl">{price}</span>
        {price !== 'Custom' && <span className="text-gray-400">/month</span>}
      </div>
      <p className="mb-6 text-gray-400">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-400">
            <CheckCircle2 className="flex-shrink-0 mr-2 w-5 h-5 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={buttonLink}
        className={`w-full inline-flex h-10 items-center justify-center rounded-md px-8 py-2 text-sm font-medium shadow transition-colors ${
          highlighted
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  )
}
