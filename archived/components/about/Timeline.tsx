 <div className="relative flex flex-col items-start space-y-10 bg-[#071144] p-10">
    {/* Timeline (Sticky) */}
    <div className="absolute top-20 left-0 flex flex-col items-center space-y-10">
        <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="h-24 w-1 bg-gray-400"></div>
        <span className="text-blue-400 font-bold">2018</span>
        </div>
        <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
        <div className="h-24 w-1 bg-gray-400"></div>
        <span className="text-yellow-500 font-bold">2020</span>
        </div>
        <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
        <span className="text-pink-500 font-bold">Today</span>
        </div>
    </div>

    {/* Timeline Content */}
    <div className="flex flex-col w-full justify-center items-center space-y-20">
        <div className="flex items-center">
            <div className="max-w-lg text-white">
                <h2 className="text-3xl font-bold mb-4">
                    The Journey
                    <span className="block h-1 w-48 bg-blue-400 mt-2"></span>
                </h2>
                <p className="text-MUE-white">
                    Since affiliating with UMSU in 2018, Melbourne University Esports
                    (MUE) has become the heart of Unimelb&apos;s gaming scene. What began
                    as a small group of friends has grown into a thriving hub for
                    students through competitions, online events, and in-person
                    gatherings.
                </p>
            </div>
            <div className="ml-auto bg-blue-400 w-64 h-40 rounded-lg"></div>
        </div>

        <div className="flex items-center">
            <div className="max-w-lg text-white">
                <h2 className="text-3xl font-bold mb-4">
                    Adapting Through Change
                    <span className="block h-1 w-[400px] bg-yellow-500 mt-2"></span>
                </h2>
                <p className="text-MUE-white">
                    During the pandemic (2020&#45;2023), MUE pivoted to online engagement, 
                    making its Discord server the community&apos;s core. Virtual tournaments 
                    and game nights kept players connected. With campus life back, MUE continues 
                    to unite all gamers—whether casual, competitive, or social.
                </p>
            </div>
            <div className="ml-auto bg-yellow-500 w-64 h-40 rounded-lg"></div>
        </div>

        <div className="flex items-center">
            <div className="max-w-lg text-white">
                <h2 className="text-3xl font-bold mb-4">
                    Our Mission
                    <span className="block h-1 w-44 bg-pink-500 mt-2"></span>
                </h2>
                <p className="text-MUE-white">
                    More than just a club, MUE is a global community where students connect, compete, 
                    and grow. We foster inclusivity, competition, and the UniMelb spirit, welcoming 
                    everyone from casual players to aspiring pros. 
                </p>
            </div>
            <div className="ml-auto bg-pink-500 w-64 h-40 rounded-lg"></div>
        </div>
    </div>
</div>