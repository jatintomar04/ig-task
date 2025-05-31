import React from 'react'
import LandingPage from './page/landingPage'
import Slider from './components/Slider'
import StatusFeature from './page/StatusFeature'
import CourceCard from './page/CourceCard'
import HowItWorks from './components/HowItWorks'
import PricingPlan from './page/PricingPlan'
import TutorialSection from './page/TutorialSection'
import AccordionFAQ from './page/AccordionFAQ'
import LastFooter from './page/LastFooter'
import Header from './components/Header'

const App = () => {
  return (
    <div>
     <Header />
     <LandingPage />
     <Slider />
     <StatusFeature />
     <CourceCard />
     <HowItWorks />
     <PricingPlan />
     <TutorialSection />
     <AccordionFAQ />
     <LastFooter />
    </div>
  )
}

export default App