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
    stickyHeaderElement.current.classList.toggle('md:py-0', isSticky);
    stickyHeaderElement.current.classList.toggle('md:rounded-none', isSticky);
    stickyHeaderElement.current.classList.toggle('md:font-normal', isSticky);
    
  }, [isSticky]);

  return (
    <div ref={stickyHeaderElement} className="md:container md:mx-auto md:mt-12 md:sticky md:top-0 md:z-50 md:rounded-xl md:overflow-hidden md:shadow-md md:bg-white md:px-4 md:py-2 md:mb-4 transition-all md:font-bold">
      <header className="flex items-center bg-white p-2">
        <div className="md:order-3">
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
        <div className="grow flex justify-center md:order-1 md:grow-0">
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
        <div className="md:order-2 md:grow">
          <HeaderNav navItems={navItems} />
        </div>
      </header>
    </div>
  );
};

export default Header;
