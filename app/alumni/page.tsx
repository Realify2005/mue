import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import PastCommittee from '../components/alumni/PastCommittee';
import SidebarNav from '../components/alumni/SidebarNav';
import JoinMUECallToAction from '../components/alumni/JoinMUECallToAction';
import { navItems } from '../components/alumni/NavItem';

export const metadata = {
  title: 'Alumni | MUE',
  description: 'The dedicated team over the years who has helped built MUE into what it is today.',
  openGraph: {
    title: 'Alumni | MUE',
    description: 'The dedicated team over the years who has helped built MUE into what it is today.',
    url: '/games',
    siteName: 'Melbourne University Esports',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alumni | MUE",
    description: 'The dedicated team over the years who has helped built MUE into what it is today.',
  },
}

const PastCommitteePage: React.FC = () => (
  <>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 pt-16">
      <h1 className="text-5xl text-center lg:text-left font-bold text-MUE-white mb-8">Meet Our Alumni</h1>
    </div>
    <div className="max-w-7xl mx-auto flex gap-8 py-16 px-4">
      <aside className="hidden lg:block w-1/4">
        <div className="sticky top-32">
          <SidebarNav items={navItems} />
        </div>
      </aside>
      <main className="w-full lg:w-3/4 space-y-16">
        <PastCommittee />
      </main>
    </div>
    <JoinMUECallToAction />
    <Footer />
  </>
);

export default PastCommitteePage;
