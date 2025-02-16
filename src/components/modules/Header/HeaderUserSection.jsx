import React from 'react';
import Link from 'next/link';
import HedaerUserProfileSubMenuSection from './HedaerUserProfileSubMenuSection.jsx';

const HeaderUserSection = ({ isUserLoggedIn, userProfileMenu, pathArray }) => {
  return (
    <div className="rounded-full relative">
      {!isUserLoggedIn && (
        <Link href="/auth">
          <img
            className="w-6 md:w-8 h-6 md:h-8"
            src="/svg/sign-in-alt.svg"
            alt="sign-in-alt"
          />
        </Link>
      )}
      {isUserLoggedIn && (
        <div className="relative group">
          <img
            className="w-6 md:w-8 h-6 md:h-8 cursor-pointer"
            src="/svg/user.svg"
            alt="sign-in-alt"
          />
          <HedaerUserProfileSubMenuSection
            userProfileMenu={userProfileMenu}
            pathArray={pathArray}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderUserSection;
