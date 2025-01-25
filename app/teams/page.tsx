import React from 'react'
import Image from 'next/image';

import { fetchInfo, fetchTeamInfo } from '../components/api/fetchTeamsInfo';

var teams = ["Alpha", "Omega"]

const page = async () => {
    const data = await fetchTeamInfo("Valorant", "Omega");
    return (
        <>
            <h1>Team Omega</h1>
            {data.map(player => {
                return <div className='bg-gray-500'>
                    <h1>{player.name}</h1>
                    <p>{player.role}</p>
                    <Image src={player.logo} alt="img" width={50} height={50}/>
                </div>
            })}
        </>
    );
}

export default page