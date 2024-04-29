import React from 'react'
import MUExUMSU from '../MUExUMSU'

const LandingSection: React.FC = () => {
    return (
        <div className="mt-16 grid gap-5 justify-items-center align-items-center">
            <MUExUMSU />
            <h3 className="text-4xl font-extrabold dark:text-white">Melbourne University Esports (MUE)</h3>
            <p className="text-base">The best of Unimelb spirit, now in e-sports</p>
            <iframe className="w-screen md:w-1/3" width="560" height="315" src="https://www.youtube.com/embed/Y_fLIxCPSaQ?si=W3tCGvYiruMbPej_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default LandingSection

