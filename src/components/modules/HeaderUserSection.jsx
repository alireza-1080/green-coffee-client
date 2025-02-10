import React from 'react';
import Link from 'next/link';

const HeaderUserSection = ({ isUserLoggedIn, userProfileMenu }) => {
  return (
    <div className="w-6 md:w-8 h-6 md:h-8 relative">
      {!isUserLoggedIn && (
        <Link href="/auth">
          <img src="/svg/sign-in-alt.svg" alt="sign-in-alt" />
        </Link>
      )}
      {isUserLoggedIn && (
        <div>
          <Link href="/profile">
            <img className='bg-red-300' src="/svg/user.svg" alt="sign-in-alt" />
          </Link>
          {/* <div>
            <ul>
              {userProfileMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default HeaderUserSection;
