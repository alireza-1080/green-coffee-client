import React from 'react'
import HeaderServer from '@components/server/HeaderServer'
import HomePageNavigation from '@components/modules/Header/HomePageNavigation'
import Footer from '@components/templates/Home/Footer'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="w-full min-h-screen lg:container mx-auto">
      <div>
        <HeaderServer>
          <HomePageNavigation />
        </HeaderServer>
      </div>
      <div className='w-full h-fit py-20 bg-white flex items-center justify-center mx-auto'>
        <Image className='max-w-96 w-full lg:hidden' src={'/gif/404-phone.gif'} unoptimized width={500} height={500} alt="404-phone"></Image>
        <Image className='hidden lg:block' src={'/gif/404-laptop.gif'} unoptimized width={500} height={500} alt="404-laptop"></Image>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
