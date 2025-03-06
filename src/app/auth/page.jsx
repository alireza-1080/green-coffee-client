import React from 'react'
import AuthServer from '@/components/server/AuthServer'
import AuthContent from '@/components/modules/Auth/AuthContent'
import HeaderServer from '@/components/server/HeaderServer'
import HomePageNavigation from '@/components/modules/Header/HomePageNavigation'

const AuthPage = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <HeaderServer>
          <HomePageNavigation />
        </HeaderServer>
      </div>
      <div className='w-full lg:container mx-auto mt-24 bg-gray-600 lg:py-20'>
        <AuthServer>
          <AuthContent />
        </AuthServer>
      </div>
    </div>
  )
}

export default AuthPage
