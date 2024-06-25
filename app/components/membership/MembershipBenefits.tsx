import React from 'react'

const benefits = [
    {
      name: 'Karuza',
      description:
        '10% off all Karuza PCs.',
      href: 'https://www.centrecom.com.au/centre-com-gaming',
    },
    {
      name: 'Aftershock',
      description:
        '$50 off any Aftershock system over $1000',
      href: 'https://aftershockpc.com.au/',
    },
    {
      name: 'GIC E-sports iCafe',
      description:
        'Up to $50 Free credit at GIC E-sports iCafe',
      href: 'https://www.gic-esports.com.au/',
    },
    {
      name: 'GXS Studios',
      description:
        '20% ON RELEASE - GXS STUDIOS COLLECTION #03',
      href: 'https://gxsstudios.com/',
    },
  ]
  
const MembershipBenefits: React.FC = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Membership Benefits
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Last updated for Semester 1, 2024
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {benefit.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                    <p className="mt-6">
                      <a href={benefit.href} className="text-sm font-semibold leading-6 text-indigo-600">
                        Sponsor&apos;s website <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
}

export default MembershipBenefits