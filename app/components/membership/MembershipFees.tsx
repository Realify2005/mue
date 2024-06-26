import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const membershipLink = "https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/"

const tiers = [
  {
    name: 'Unimelb',
    id: 'tier-unimelb',
    href: membershipLink,
    priceMonthly: '$10',
    description: "For current unimelb students",
    features: [
      'Free entrance to most of our events and workshops (Free food & drinks)',
      'Heavily discounted paid events',
      'Special membership deals & discounts from our sponsors',
      'A fancy @MUE Member 2024 role to rise above the commoners (and get access to the #members-only channel!)',
      'Nominate in the Annual General Meetings (AGM) and Special General Meetings (SGM)',
      'Tryout for MUE\'s very own competitive team',
    ],
    featured: true,
  },
  {
    name: 'Non-Unimelb',
    id: 'tier-nonunimelb',
    href: membershipLink,
    priceMonthly: '$10',
    description: 'For non-unimelb students',
    features: [
      'Free entrance to most of our events and workshops (Free food & drinks)',
      'Heavily discounted paid events',
      'Special membership deals & discounts from our sponsors',
      'A fancy @MUE Member 2024 role to rise above the commoners (and get access to the #members-only channel!)',
    ],
    featured: false,
  },
]

function classNames(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

const MembershipFees: React.FC = () => {
    return (
        <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
          <div
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Membership Fees</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Become a member today
          </p>
        </div>
        <p className="mx-auto mt-6 text-center text-lg leading-8 text-gray-600">
          The official membership comes with free entrances to most of our major events and workshops, various benefits from our sponsors and, 
          if you seek to participate in tournaments, partial or full funding from the club with free training sessions! Become a member today 
          and start taking full advantage of the benefits, hang out and play games in internet cafes and gaming lounges, engage with the gaming 
          community and get excited together watching your favourite tournaments on screen!
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured ? 'relative bg-white shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : tierIdx === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                    : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
              )}
            >
              <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                <span className="text-base text-gray-500">/year</span>
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-indigo-600 text-white shadow hover:bg-indigo-500'
                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10',
                )}
              >
                Get started today
              </a>
            </div>
          ))}
          </div>
        </div>
    )
}

export default MembershipFees