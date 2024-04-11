import React from 'react'

const LanguageBarrier: React.FC = () => {
    return (
        <div className="flex flex-col space-y-12 justify-center items-left">
            <span>
                <h6 className="text-1xl font-semibold text-white">
                    The affilitation
                </h6>
                <p className="text-white font-light">
                    In a warm afternoon on the 4th of October, 2018, an Inaugural General Meeting took place. Respecting the cooperation and the fact that the Chinese team initiated the club affiliation process 
                    first, Ethan, who led the Chinese team, was elected president and Charles, who led the team from SEE, was elected vice-president. The first committee was a mixture of both communities as a 
                    symbolic representation both of the Chinese-speaking community, and the local English-speaking community.
                </p>
            </span>
            <span className="text-white font-light">
                On the 31st of October in the same year, the four executives of the club received an email from UMSU. UMESA has been officially affiliated. 
            </span>
            <span className="text-white font-light">
                Two worlds, divided by language, united by a common purpose, strengthened by diversity. This is UMESA - a club uniting gamers from all around the world, on a mission to promote the best of the Unimelb spirit in e-sports.\
            </span>
        </div>
    )
}

export default LanguageBarrier;