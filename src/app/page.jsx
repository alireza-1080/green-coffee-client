import React from 'react'
import HomePageHeader from '../components/templates/Home/HomePageHeader.jsx'
import LatestProducts from '../components/templates/Home/LatestProducts.jsx'

const Home = () => {
  return (
    <div className='mb-96'>
      <HomePageHeader />
      <LatestProducts />
    </div>
  )
}

export default Home
