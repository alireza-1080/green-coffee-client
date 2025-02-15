'use client';
import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderUserSection from './HeaderUserSection';
import HeaderImage from './HeaderImage';
import { usePathname } from 'next/navigation';

const Header = ({ navItems, userProfileMenu, isUserLoggedIn }) => {
  const path = usePathname();
  const pathArray = path.split('/');

  return (
    <div className="lg:container lg:mx-auto sticky top-0 z-50">
      <header className="flex items-center bg-white py-2 px-5">
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

export default Header;
