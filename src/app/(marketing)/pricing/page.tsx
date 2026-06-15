import React from 'react'
import Link from 'next/link'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="mx-auto px-4 py-12 text-white container">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h1 className="mb-4 font-bold text-gray-900 dark:text-white text-4xl">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400 dark:text-gray-300 text-xl">
          Choose the plan that&apos;s right for you and your team
        </p>
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto mb-16 max-w-5xl">
        {/* Free Plan */}
        <PricingCard
          title="Free"
          price="$0"
          description="Perfect for individuals and small teams getting started."
          features={[
            { name: 'Up to 3 team members', included: true },
            { name: 'Unlimited issues', included: true },
            { name: 'Basic issue tracking', included: true },
            { name: 'Email support', included: true },
            { name: 'API access', included: false },
            { name: 'Custom fields', included: false },
            { name: 'Advanced integrations', included: false },
          ]}
          buttonText="Sign Up Free"
          buttonLink="/auth/signup"
        />

        {/* Pro Plan */}
        <PricingCard
          title="Pro"
          price="$10"
          period="per user / month"
          description="For growing teams that need more features and flexibility."
          features={[
            { name: 'Unlimited team members', included: true },
            { name: 'Unlimited issues', included: true },
            { name: 'Advanced issue tracking', included: true },
            { name: 'Priority support', included: true },
            { name: 'API access', included: true },
            { name: 'Custom fields', included: true },
            { name: 'Advanced integrations', included: false },
          ]}
          buttonText="Coming Soon"
          buttonLink="#"
          highlighted
          badge="Popular"
        />

        {/* Enterprise Plan */}
        <PricingCard
          title="Enterprise"
          price="Custom"
          description="For organizations that need advanced security and support."
          features={[
            { name: 'Unlimited team members', included: true },
            { name: 'Unlimited issues', included: true },
            { name: 'Advanced issue tracking', included: true },
            { name: 'Dedicated support', included: true },
            { name: 'API access', included: true },
            { name: 'Custom fields', included: true },
            { name: 'Advanced integrations', included: true },
          ]}
          buttonText="Contact Sales"
          buttonLink="mailto:sales@linearclone.com"
        />
      </div>

      <div className="bg-gray-800 mx-auto mt-16 p-8 rounded-lg max-w-3xl text-center">
        <h2 className="mb-4 font-bold text-white text-2xl">
          Need a custom solution?
        </h2>
        <p className="mb-8 text-gray-400 dark:text-gray-300 text-lg">
          Contact our sales team to discuss your specific requirements.
        </p>
        <a
          href="mailto:sales@linearclone.com"
          className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 shadow px-8 py-2 rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 h-10 font-medium text-white text-sm transition-colors"
        >
          Contact Sales
        </a>
      </div>
    </div>
  )
}

interface PricingFeature {
  name: string
  included: boolean
}

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: PricingFeature[]
  buttonText: string
  buttonLink: string
  highlighted?: boolean
  badge?: string
}

function PricingCard({
  title,
  price,
  period = 'per month',
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg p-6 ${
        highlighted
          ? 'bg-blue-900 border-2 border-blue-700 shadow-md relative'
          : 'bg-gray-800 border border-gray-700 shadow-sm'
      }`}
    >
      {badge && (
        <div className="-top-3 -right-3 absolute bg-blue-600 px-3 py-1 rounded-full font-bold text-white text-xs">
          {badge}
        </div>
      )}
      <h3 className="mb-2 font-bold text-white text-xl">{title}</h3>
      <div className="mb-4">
        <span className="font-bold text-white text-3xl">{price}</span>
        {price !== 'Custom' && (
          <span className="text-gray-400 dark:text-gray-300"> {period}</span>
        )}
      </div>
      <p className="mb-6 text-gray-400 dark:text-gray-300">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <CheckCircle2 className="flex-shrink-0 mr-2 w-5 h-5 text-green-300" />
            ) : (
              <XCircle className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500" />
            )}
            <span
              className={
                feature.included
                  ? 'text-white'
                  : 'text-gray-500 dark:text-gray-600'
              }
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={buttonLink}
        className={`w-full inline-flex h-10 items-center justify-center rounded-md px-8 py-2 text-sm font-medium shadow transition-colors ${
          highlighted
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-800 border border-gray-700 hover:bg-gray-700 text-white'
        }`}
      >
        {buttonText}
      </Link>
    </div>
  )
}
