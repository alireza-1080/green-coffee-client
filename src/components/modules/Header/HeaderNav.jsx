import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const HeaderNav = ({ navItems, isUserLoggedIn, pathArray }) => {
  return (
    <>
      <DesktopNav navItems={navItems} isUserLoggedIn={isUserLoggedIn} pathArray={pathArray}/>
      <MobileNav navItems={navItems} isUserLoggedIn={isUserLoggedIn} pathArray={pathArray}/>
    </>
  );
};

export default HeaderNav;
