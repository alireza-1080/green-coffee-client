import React from 'react'
import HomePageHeader from '../components/templates/Home/HomePageHeader.jsx'
import LatestProducts from '../components/templates/Home/LatestProducts.jsx'
import BuyCoffeeLikeProSection from '@/components/templates/Home/BuyCoffeeLikeProSection.jsx'
import WhatMakesUsDifferent from '@/components/templates/Home/WhatMakesUsDifferent.jsx'

const Home = () => {
  return (
    <div className='mb-96'>
      <HomePageHeader />
      <LatestProducts />
      <BuyCoffeeLikeProSection />
      <WhatMakesUsDifferent />
    </div>
  )
}

export default Home
