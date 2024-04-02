import React from 'react'
import Header from './Header'
import MUExUMSU from './MUExUMSU'

const LandingSection: React.FC = () => {
    return (
        <div className="grid gap-5 justify-items-center align-items-center">
            <div className="flex justify-center p-5">
            <Header />
            </div>
            <MUExUMSU />
            <h2 className="text-4xl font-extrabold dark:text-white">Melbourne University Esports (MUE)</h2>
            <p className="text-base">The best of Unimelb spirit, now in e-sports</p>
        </div>
    )
}

export default LandingSection

