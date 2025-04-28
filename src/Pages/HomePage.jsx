import React from 'react'
import TrustedByMarquee from '../Components/HomeComponents/TrustedByMarquee'
import LandingPage from '../Components/HomeComponents/LandingComp'
import ConferenceSolutions from '../Components/HomeComponents/ConferenceSoluton'

const HomePage = () => {
    return (
        <div>


            <LandingPage />
            <ConferenceSolutions />
            <TrustedByMarquee />
        </div>
    )
}

export default HomePage