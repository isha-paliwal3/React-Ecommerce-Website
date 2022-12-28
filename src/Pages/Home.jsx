import React from 'react'
import FeaturedProduct from '../Components/FeaturedProduct'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import Trusted from '../Components/Trusted'

const Home = () => {
  return (
    <>
      <HeroSection title="ApnaStore" photo="./assets/images/heroimg.png" />
      <FeaturedProduct/>
      <Services />
      <Trusted />
    </>
  )
}

export default Home
