

import InnovationSection from "../Components/AboutComponents/InnovationSection"

import AboutOracle from "../Components/AboutComponents/AboutOracle"
import Banner from "../Components/AboutComponents/Banner"
import OracleTimeline from "../Components/AboutComponents/OracleTimeline.JSX"
import OurJourney from "../Components/AboutComponents/OurJourney"
import VisionMission from "../Components/AboutComponents/VisionMission"

import WhoWeAre from "../Components/AboutComponents/WhoWeAre"

function AboutUs() {
  return (
    <div>
      <Banner />
      <WhoWeAre />
      <InnovationSection />


      <VisionMission />
      <AboutOracle />
      <OurJourney />
      <OracleTimeline />

    </div>
  )
}

export default AboutUs
