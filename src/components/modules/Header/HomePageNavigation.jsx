'use client'
import React from 'react'
import HeaderNav from './HeaderNav'
import HeaderUserSection from './HeaderUserSection'
import HeaderImage from './HeaderImage'
import { usePathname } from 'next/navigation'

const HomePageNavigation = ({ navItems, userProfileMenu, isUserLoggedIn }) => {
  const path = usePathname()
  const pathArray = path.split('/')

  const [isSticky, setIsSticky] = React.useState(false)
  const [isItMainPage, setIsItMainPage] = React.useState(false)

  React.useEffect(() => {
    
    if (isItMainPage) {
      setIsSticky(window.scrollY > 48)

    const handleScroll = () => {
      setIsSticky(window.scrollY > 48)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    } else {
      setIsSticky(true)
    }
    
  }, [isItMainPage])

  React.useEffect(() => {
    setIsItMainPage(pathArray[1] === "")
  }, [path])

  return (
    <div
      className={`lg:container ${!isSticky && 'lg:w-4/5'} lg:mx-auto ${!isSticky ? 'lg:mt-12' : ""} lg:sticky lg:top-0 lg:z-50 ${
        !isSticky && 'lg:rounded-xl'
      }  lg:shadow-xl bg-white ${
        !isSticky ? 'lg:bg-white/60 backdrop-blur-sm' : 'bg-white backdrop-blur-none'
      } lg:px-4 ${!isSticky ? "transition-all" : ""} border-b-2 xl:border-b-4 border-green-dark`}
    >
      <header className="flex items-center py-2 px-5">
        <div className="lg:order-3">
          <HeaderUserSection isUserLoggedIn={isUserLoggedIn} userProfileMenu={userProfileMenu} pathArray={pathArray} />
        </div>
        <div className="grow flex justify-center lg:order-1 lg:grow-0 shrink-0">
          <HeaderImage />
        </div>
        <div className="lg:order-2 lg:grow">
          <HeaderNav navItems={navItems} pathArray={pathArray} />
        </div>
      </header>
    </div>
  )
}

export default HomePageNavigation
