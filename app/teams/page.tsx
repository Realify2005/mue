import React from 'react'
import Image from 'next/image';

import { fetchInfo, fetchTeamInfo } from '../components/api/fetchTeamsInfo';
import TeamDisplay from '../components/teams/teamDisplay';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

var teams = ["Alpha", "Omega"]

const page = async () => {
    const data = await fetchTeamInfo("Valorant", "Omega");
    return (
        <>
            <Navbar />
            <div className="mt-20 flex items-center justify-center">
                <TeamDisplay game="Valorant" team="Omega" display="Team Omega"/>
                <TeamDisplay game="Counter Strike 2" team="A" display="Counterstrike Team"/>
                <TeamDisplay game="Overwatch" team="Overwatch_1" display="Overwatch" />
            </div>
            <Footer />
        </>
    );
}

export default page