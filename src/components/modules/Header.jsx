'use client';
import React from 'react';
import HeaderNav from './HeaderNav';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

  const stickyHeaderElement = React.useRef(null);

  //! This should be fetched from the backend
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Shop', link: '/shop' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' },
    { title: 'About', link: '/about' },
    { title: 'Rules', link: '/rules' },
  ];

  //! This should be fetched from the backend
  const isUserLoggedIn = false;

  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 48);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  React.useEffect(() => {
    stickyHeaderElement.current.classList.toggle('lg:py-2', !isSticky);
    stickyHeaderElement.current.classList.toggle('lg:rounded-xl', !isSticky);
    stickyHeaderElement.current.classList.toggle('lg:w-4/5', !isSticky);
  }, [isSticky]);

  return (
    <div ref={stickyHeaderElement} className="lg:container lg:w-4/5 lg:mx-auto lg:mt-12 lg:sticky lg:top-0 lg:z-50 lg:rounded-xl lg:overflow-hidden lg:shadow-md lg:bg-white lg:px-4 lg:py-2 lg:mb-4 transition-all lg:font-bold">
      <header className="flex items-center bg-white py-2 px-5">
        <div className="lg:order-3">
          {/* Move signin/signup or user profile here  
        { title: 'Sign in / Sign up', link: '/auth' },
    {
      title: 'User Profile',
      link: '/profile',
      subMenu: [
        { title: 'Orders', link: '/orders' },
        { title: 'Tickets', link: '/tickets' },
        { title: 'Comments', link: '/comments' },
        { title: 'Whishlist', link: '/whishlist' },
        { title: 'Details', link: '/details' },
      ],
    },*/}
          logos
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
