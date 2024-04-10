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
              <div className="mt-12 px-5 md:px-80 flex flex-col justify-center items-center py-20 bg-cover bg-center bg-no-repeat bg-[url('../public/background/history_bg_1.jpg')]">
                <h2 className="m-16 text-3xl font-semibold text-white">The History of MUE</h2>
                <div className="py-12 px-96 w-screen flex flex-col space-y-8 justify-center items-left bg-gray-600">
                  <span className="text-white">
                    The founding of UMESA (now MUE) bears a curiously peculiar story about how e-sport enthusiasts of two worlds collided to form what it is today.
                  </span>
                  <span>
                    <h6 className="text-1xl font-semibold text-white">
                      E-Sports in Unimelb before UMESA
                    </h6>       
                    <p className="text-white">
                      Before UMESA was founded, there was another club that managed Unimelb&apos;s e-sport affairs - the Society for Electronic Entertainment (SEE). 
                      SEE is a club that has always focused on generic gaming, whether it be on PC or on the consoles. In general, they have no specific games on which
                      they focus - most of its members favour Pokemon, Super Smash Bros and Tekken 7, but technically they chose not to focus on any game - when SEE was 
                      founded some ten years ago, they sought to promote the joys of gaming and to encourage members to discuss games and play together to foster relations 
                      among themselves. At that time, the term e-sports has yet to even be coined and as such, SEE had members who managed individual communities that played 
                      games such as League of Legends, CS:GO and Overwatch.
                    </p>      
                  </span>
                  <span className="text-white">
                    Gradually as the e-sport market and tournament scenes exploded all around the world, SEE found that it could no longer endeavour to focus on e-sports while 
                    still trying to manage the other genres of gaming. Eventually, SEE&apos;s committee of 2017 sought to lead efforts to found a separate e-sports club in Unimelb.
                    However, at that time, UMSU saw no reason to found a separate club with a constitution they deemed too similar to that of SEE&apos;s. With this failure, SEE sought
                    to rejuvenate their efforts in promoting e-sports, enacting plans for the individual communities to host weekly online sessions to keep the community together, 
                    and hosting tournaments that could potentially engage the e-sport gamers.
                  </span>
                  <span className="text-white">
                    This did not last, however, as the committee of 2018 found it increasingly harder to simultaneously promote gaming and e-sports. The tournaments did not gain as much
                    traction as they had hoped, and the communities gradually died off as one by one their administrators and members moved on with their lives, and with no successors to
                    rally these communities back to the weekly games. Hence, the committee sought again to found a separate e-sports club. Seeking advice from the team that led the first attempt,
                    this time they decided that the club would be founded under MU Sports.
                  </span> 
                  <span className="text-white">
                    It was during negotiations with MU Sports that this team would find out about another separate team that had already initiated the founding of the club under UMSU. This club was 
                    to be named the University of Melbourne E-Sports Association.
                  </span>
                </div>
              </div>
            <Footer />
        </>
    )
}

export default HistoryPage