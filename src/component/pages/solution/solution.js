import React from 'react'
import HeroSection from './solution-component/HeroSection'
import InnovativeSolution from './solution-component/InnovativeSolution'
import WorkForceSolution from './solution-component/WorkForceSolution'
import CardSection from './solution-component/CardSection'
import ManageService from './solution-component/ManageService'
import OurApproach from './solution-component/OurApproach'
import PreferredChoice from './solution-component/PreferredChoice'

const OurSolution = () => {
  return (
    <>
      <HeroSection/>
      <InnovativeSolution/>
      <WorkForceSolution/>
      <CardSection/>
      <ManageService/>
      <OurApproach/>
      <PreferredChoice/>
    </>
  )
}

export default OurSolution