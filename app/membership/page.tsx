import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MembershipLandingPage from "../components/membership/MembershipLandingPage";
import MembershipPerks from "../components/membership/MembershipPerks";
import JoinOurCommittee from "../components/membership/JoinOurCommittee";
import AvailableRoles from "../components/membership/AvailableRoles";

export const metadata = {
  title: "Membership | MUE",
  description:
    "Access numerous attractive gaming benefits and vouchers for just $10! Become a member at MUE today!",
  openGraph: {
    title: "Membership | MUE",
    description:
      "Access numerous attractive gaming benefits and vouchers for just $10! Become a member at MUE today!",
    url: "/membership",
    siteName: "Melbourne University Esports",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership | MUE",
    description:
      "Access numerous attractive gaming benefits and vouchers for just $10! Become a member at MUE today!",
  },
};

/**
 * Memberships Page Component
 * @returns {JSX.Element} Main page component for the memberships section
 */
const MembershipsPage: React.FC = () => {
  return (
    <>
      <Navbar />

      <MembershipLandingPage />
      <MembershipPerks />
      <JoinOurCommittee />
      <AvailableRoles />

      <Footer />
    </>
  );
};

export default MembershipsPage;
