import React from 'react'
import TrustedByMarquee from '../Components/HomeComponents/TrustedByMarquee'
import LandingPage from '../Components/HomeComponents/LandingComp'
import ConferenceSolutions from '../Components/HomeComponents/ConferenceSoluton'
import LetBringYourSpaceLife from '../Components/HomeComponents/LetBringYourSpaceLife'
import TailoredAvSolutions from '../Components/HomeComponents/TailoredAvSolutions'
import ServicesSection from '../Components/HomeComponents/ServicesSection'
import WhyChooseUs from '../Components/HomeComponents/WhyChooseUs'

const HomePage = () => {
    return (
        <div>


            <LandingPage />
            <ConferenceSolutions />
            <TailoredAvSolutions />
            <ServicesSection />
            <TrustedByMarquee />
            <LetBringYourSpaceLife />
            <WhyChooseUs />

        </div>
    )
}

export default HomePage