import React from 'react'
import HeroSec from './Home-component/HeroSec'
import CountriesComponent from './Home-component/CountriesComponent'
import AchievementComponent from './Home-component/AchievementComponent'
import WhatWeOffer from './Home-component/WhatweOffer'
import Why from './Home-component/Why'
import CertificationComponent from './Home-component/CertificationComponent'


const Home = () => {
  return (
    <>
      <HeroSec/>
      <CountriesComponent/>
      <AchievementComponent/>
      <WhatWeOffer/>
      <Why/>
      <CertificationComponent/>
    </>
  )
}

export default Home