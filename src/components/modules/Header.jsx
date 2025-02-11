'use client';
import React from 'react';
import HeaderNav from './HeaderNav';
import Image from 'next/image';
import Link from 'next/link';
import HeaderUserSection from './HeaderUserSection';

const Header = ({ navItems, userProfileMenu, isUserLoggedIn }) => {
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
      }  lg:shadow-md lg:bg-white lg:px-4 ${
        !isSticky && 'lg:py-2'
      } lg:mb-4 transition-all lg:font-bold`}
    >
      <header className="flex items-center bg-white py-2 px-5">
        <div className="lg:order-3">
          <HeaderUserSection
            isUserLoggedIn={isUserLoggedIn}
            userProfileMenu={userProfileMenu}
          />
        </div>
        <div className="grow flex justify-center lg:order-1 lg:grow-0 shrink-0">
          <Link href="/">
            <Image
              priority
              className="w-20 h-20"
              src={'/png/logo-text.png'}
              width={100}
              height={100}
              alt="Green Coffee Logo"
            ></Image>
          </Link>
        </div>
        <div className="lg:order-2 lg:grow">
          <HeaderNav navItems={navItems} />
        </div>
      </header>
    </div>
  );
};

export default Header;
