import react from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
    title: 'Our History | MUE',
    description: 'Discover the history of how MUE has come along thus far',
    openGraph: {
      title: 'Our History | MUE',
      description: 'Discover the history of how MUE has come along thus far',
      url: '/history',
      siteName: 'Melbourne University Esports',
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Our History | MUE",
      description: 'Discover the history of how MUE has come along thus far',
    },
}

const HistoryPage: React.FC = () => {
    return (
        <>
            <Navbar />
              <div className="mt-12 px-5 pb-0 md:px-80 flex flex-col justify-center items-center py-20 bg-cover bg-center bg-no-repeat bg-[url('../public/background/history_bg_1.jpg')]">
                <h2 className="m-16 text-3xl font-semibold text-white">The History of MUE</h2>
                <div className="py-12 px-96 w-screen flex flex-col space-y-8 justify-center items-left bg-gray-600">
                  <span className="text-white">
                    The founding of UMESA (now MUE) bears a curiously peculiar story about how e-sport enthusiasts of two worlds collided to form what it is today.
                  </span>
                  <span>
                    <h6 className="text-1xl font-semibold text-white">
                      E-Sports in Unimelb before UMESA
                    </h6>       
                    <p className="text-white font-light">
                      Before UMESA was founded, there was another club that managed Unimelb&apos;s e-sport affairs - the Society for Electronic Entertainment (SEE). 
                      SEE is a club that has always focused on generic gaming, whether it be on PC or on the consoles. In general, they have no specific games on which
                      they focus - most of its members favour Pokemon, Super Smash Bros and Tekken 7, but technically they chose not to focus on any game - when SEE was 
                      founded some ten years ago, they sought to promote the joys of gaming and to encourage members to discuss games and play together to foster relations 
                      among themselves. At that time, the term e-sports has yet to even be coined and as such, SEE had members who managed individual communities that played 
                      games such as League of Legends, CS:GO and Overwatch.
                    </p>      
                  </span>
                  <span className="text-white font-light">
                    Gradually as the e-sport market and tournament scenes exploded all around the world, SEE found that it could no longer endeavour to focus on e-sports while 
                    still trying to manage the other genres of gaming. Eventually, SEE&apos;s committee of 2017 sought to lead efforts to found a separate e-sports club in Unimelb.
                    However, at that time, UMSU saw no reason to found a separate club with a constitution they deemed too similar to that of SEE&apos;s. With this failure, SEE sought
                    to rejuvenate their efforts in promoting e-sports, enacting plans for the individual communities to host weekly online sessions to keep the community together, 
                    and hosting tournaments that could potentially engage the e-sport gamers.
                  </span>
                  <span className="text-white font-light">
                    This did not last, however, as the committee of 2018 found it increasingly harder to simultaneously promote gaming and e-sports. The tournaments did not gain as much
                    traction as they had hoped, and the communities gradually died off as one by one their administrators and members moved on with their lives, and with no successors to
                    rally these communities back to the weekly games. Hence, the committee sought again to found a separate e-sports club. Seeking advice from the team that led the first attempt,
                    this time they decided that the club would be founded under MU Sports.
                  </span> 
                  <span className="text-white font-light">
                    It was during negotiations with MU Sports that this team would find out about another separate team that had already initiated the founding of the club under UMSU. This club was 
                    to be named the University of Melbourne E-Sports Association.
                  </span>
                  <span>
                    <h6 className="text-1xl font-semibold text-white">
                      The plight of the language barrier
                    </h6>
                    <p className="text-white font-light">
                    Many Chinese students were also avid gamers of e-sports back home, but because they came to Melbourne 'to study and not to play', a lot of potential e-sport pros chose to suppress
                    their talents in favour of a degree. A group of Chinese students saw it problematic that there has never been a proper platform in Unimelb for e-sports, and sought to dispel an 
                    old Chinese stereotype that an avid gamer makes a failure in society. In the first weeks of Semester 2 of 2018, they initiated the club affiliation process under UMSU to found a club, 
                    to be named the E-Sports Association, and all was smooth in the beginning.
                    </p>
                  </span>
                  <span className="text-white font-light">
                    However, in the midst of discussions they immediately recognised a challenge at hand: being a university club promoting esports, a global phenomenon, meant that they couldn't treat this
                    club as a Chinese-only club where members primarily communicate in Mandarin. The club needs to appeal to the local English-speaking community too, and with what they had thus far planned
                    for the club they risked alienating this very vital community. 
                  </span>
                  <span className="text-white font-light">
                    To their luck, they were by chance contacted by MU Sports that another team seeks also to found an e-sports club. Under UMSU rules, where two teams intend to found clubs that bear similar 
                    aims, those two teams are to merge into a single club. And it was exactly through this that they met with the team from SEE. It was a match made in heaven - with the same wish of seeing the
                    e-sport scene in Unimelb grow, within days both teams were able to sort things out and initiate future plans for the club. 
                  </span>
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
                    Two worlds, divided by language, united by a common purpose, strengthened by diversity. This is UMESA - a club uniting gamers from all around the world, on a mission to promote the best of the Unimelb spirit in e-sports. 
                  </span>
                  <span>
                    <h6 className="text-1xl font-semibold text-white">
                      The rebranding
                    </h6>
                    <p className="text-white font-light">
                      Around the end of 2023, the committee has decided to rebrand the club&apos;s name. University of Melbourne Esports Association (UMESA) has been rebranded into Melbourne University Esports (MUE). We also came up a brand new logo as part of rebranding.
                    </p>
                  </span>
                </div>
              </div>
            <Footer />
        </>
    )
}

export default HistoryPage