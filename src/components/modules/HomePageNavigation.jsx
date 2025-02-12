'use client';
import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderUserSection from './HeaderUserSection';
import HeaderImage from './HeaderImage';
import { usePathname } from 'next/navigation';

const HomePageNavigation = ({ navItems, userProfileMenu, isUserLoggedIn }) => {
  const path = usePathname();
  const pathArray = path.split('/');

  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 48);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`lg:container ${
        !isSticky && 'lg:w-4/5'
      } lg:mx-auto lg:mt-12 lg:sticky lg:top-0 lg:z-50 ${
        !isSticky && 'lg:rounded-xl'
      }  lg:shadow-xl ${
        !isSticky ? 'bg-white/60 backdrop-blur-sm' : 'bg-white backdrop-blur-none'
      } lg:px-4 transition-all`}
    >
      <header className="flex items-center py-2 px-5">
        <div className="lg:order-3">
          <HeaderUserSection
            isUserLoggedIn={isUserLoggedIn}
            userProfileMenu={userProfileMenu}
            pathArray={pathArray}
          />
        </div>
        <div className="grow flex justify-center lg:order-1 lg:grow-0 shrink-0">
          <HeaderImage />
        </div>
        <div className="lg:order-2 lg:grow">
          <HeaderNav navItems={navItems} pathArray={pathArray} />
        </div>
      </header>
    </div>
  );
};

export default HomePageNavigation;
