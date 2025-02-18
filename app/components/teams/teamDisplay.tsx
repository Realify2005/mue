import React from 'react'

import { fetchInfo, fetchTeamInfo } from '../api/fetchTeamsInfo'
import Image from 'next/image';

const TeamDisplay: React.FC<{ game: string, team: string, display: string}> = async ({ game, team, display }) => {
    const data = await fetchTeamInfo(game, team);
    const ordered_roles = [
        "Duelist","Initiator", "Controller", "Sentinel",
        "Top", "Mid", "Jungle", "Bot",
        "DPS", "Tank", "Support", "Fill",
        "Player", "Substitute",
        "Coach"
    ]
    data.sort((a,b) => ordered_roles.indexOf(a.role[0]) - ordered_roles.indexOf(b.role[0]));
    return (
      <div className='max-w-md p-3 mx-4 bg-gray-200 rounded-lg'>
        <div className='text-2xl text-center p-1'>{ display }</div>
        <div className='rounded-lg bg-gray-500 p-1'>
            {data.map(player => {
                return <div className='bg-gray-500 flex space-x-4 p-1' key={player.name}>
                    <p className='min-w-[150px]'>{player.name}</p>
                    <p className='min-w-[100px]'>{player.role}</p>
                    {player?.logo && <Image src={player.logo} alt="img" width={50} height={50}/>}
                </div>
            })}
        </div>
      </div>
    )
}

// const valorantDisplay: React.FC<{ team: string, display: string}> = async ({ team, display }) => {
//     const data = await fetchTeamInfo("Valorant", team);
//     const ordered_roles = [
//         "Duelist","Initiator", "Controller", "Sentinel",
//         "Top", "Mid", "Jungle", "Bot",
//         "DPS", "Tank", "Support", "Fill",
//         "Player", "Substitute",
//         "Coach"
//     ]
//     data.sort((a,b) => ordered_roles.indexOf(a.role) - ordered_roles.indexOf(b.role));
//     return (
//         <div>

//         </div>
//     );
// }

export default TeamDisplay