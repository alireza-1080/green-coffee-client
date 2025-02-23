import React from 'react'
import HomePageHeader from '../components/templates/Home/HomePageHeader.jsx'
import LatestProducts from '../components/templates/Home/LatestProducts.jsx'
import BuyCoffeeLikeProSection from '@/components/templates/Home/BuyCoffeeLikeProSection.jsx'
import WhatMakesUsDifferent from '@/components/templates/Home/WhatMakesUsDifferent.jsx'
import LatestArticles from '@/components/templates/Home/LatestArticles.jsx'
import Footer from '@/components/templates/Home/Footer.jsx'

const Home = () => {
  return (
    <div>
      <HomePageHeader />
      <LatestProducts />
      <BuyCoffeeLikeProSection />
      <WhatMakesUsDifferent />
      <LatestArticles />
      <Footer />
    </div>
  )
}

export default Home
