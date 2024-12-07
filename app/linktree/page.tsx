import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const LinkPage = () => {
  return (
    <>
        <Navbar />
            <div className="mt-12 px-5 py-8 md:px-80 flex flex-col justify-center items-center bg-gray-500">
                <a href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6725/">
                    <div className='bg-white border border-black rounded-lg p-4 flex items-center'>
                        <Image src="/logos/icons/umsu.png" alt='umsu' width={40} height={40}/>
                        <p className='text-2xl mx-36'>🎮MUE Membership 2025! 🎮 </p>
                    </div>
                </a>
                <div>
                    Test
                </div>
            </div>
        <Footer />
    </>
  )
}

export default LinkPage