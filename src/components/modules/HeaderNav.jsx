import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const HeaderNav = ({ navItems, isUserLoggedIn }) => {
  return (
    <>
      <DesktopNav navItems={navItems} isUserLoggedIn={isUserLoggedIn} />
      <MobileNav navItems={navItems} isUserLoggedIn={isUserLoggedIn} />
    </>
  );
};

export default HeaderNav;
