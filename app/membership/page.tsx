import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MembershipFees from '../components/membership/MembershipFees'
import MembershipBenefits from '../components/membership/MembershipBenefits'

export const metadata = {
    title: 'Membership | MUE',
    description: 'Access numerous attractive gaming benefits and vouchers for just $10! Become a member at MUE today!',
    openGraph: {
      title: 'Membership | MUE',
      description: 'Access numerous attractive gaming benefits and vouchers for just $10! Become a member at MUE today!',
      url: '/membership',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Membership | MUE",
      description: 'Access numerous attractive gaming benefits and vouchers for just $10! Become a member at MUE today!',
    },
}

const MembershipsPage: React.FC = () => {
    return (
      <>
      <Navbar />
      <div className="px-5 pb-0 md:px-80 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat py-20 bg-[url('../public/background/membership_bg_1.jpg')]">
        <h4 className="my-12 text-3xl font-semibold text-white">Membership</h4>
        <h5 className="mb-20 text-2xl font-semibold text-white">Your rank does not matter</h5>
      </div>
      <MembershipFees />
      {/* <MembershipBenefits /> */}
      <Footer />
  </>
    )
}

export default MembershipsPage