import React from 'react'
import HeroSec from './About-component/HeroSec'
import Advantage from './About-component/Advantage'
import GreatCertification from './About-component/GreatCertification'
import OurCards from './About-component/OurCards'
import OurLeadership from './About-component/OurLeadership'
import Winning from './About-component/Winning'


const AboutUs = () => {
  return (
    <div className='mt-12 sm:mt-22'>
      
        <HeroSec/>
        <Advantage/>
        <GreatCertification/>
        <OurCards/>
        <OurLeadership/>
        <Winning/>
       
    </div>
  )
}

export default AboutUs