import React from 'react'
import Image from 'next/image';

import { fetchInfo, fetchTeamInfo } from '../components/api/fetchTeamsInfo';
import TeamDisplay from '../components/teams/teamDisplay';

var teams = ["Alpha", "Omega"]

const page = async () => {
    const data = await fetchTeamInfo("Valorant", "Omega");
    return (
        <>
            <TeamDisplay game="Valorant" team="Omega" display="Team Omega"/>
            <TeamDisplay game="Counter Strike 2" team="A" display="Counterstrike Team"/>
            <TeamDisplay game="Overwatch" team="Overwatch_1" display="Overwatch" />
        </>
    );
}

export default page