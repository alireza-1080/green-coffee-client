'use client';
import React from 'react';
import Link from 'next/link';

const MobileNav = ({ navItems }) => {
  const burgerMenuElem = React.useRef(null);
  const crossMenuElem = React.useRef(null);
  const navElem = React.useRef(null);
  const navBackgroundElem = React.useRef(null);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavChangeMenuPrevention = (e) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    burgerMenuElem.current.classList.toggle('scale-0', isMenuOpen);
    burgerMenuElem.current.classList.toggle('delay-150', !isMenuOpen);
    crossMenuElem.current.classList.toggle('scale-0', !isMenuOpen);
    crossMenuElem.current.classList.toggle('delay-150', isMenuOpen);
    navElem.current.classList.toggle('-translate-x-full', !isMenuOpen);

    if (isMenuOpen) {
      navBackgroundElem.current.classList.add('!z-40', isMenuOpen);
    } else {
      setTimeout(() => {
        navBackgroundElem.current.classList.remove('!z-40', isMenuOpen);
      }, 301);
    }
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden">
      <div className="w-6 md:w-8 h-6 md:h-8 relative z-50" onClick={handleMenu}>
        <div
          ref={burgerMenuElem}
          className="w-6 md:w-8 absolute top-0 right-0 transition "
        >
          <img className="w-full" src="/svg/menu-burger.svg" alt="menu-buger" />
        </div>
        <div
          ref={crossMenuElem}
          className="w-6 md:w-8 absolute top-0 right-0 scale-0 transition  delay-150"
        >
          <img className="w-full" src="/svg/cross.svg" alt="cross" />
        </div>
      </div>
      <div
        ref={navBackgroundElem}
        onClick={handleMenu}
        className="absolute top-0 left-0 -z-40 bg-black/50 backdrop-blur-sm w-screen min-h-screen"
      >
        <ul
          ref={navElem}
          onClick={handleNavChangeMenuPrevention}
          className="bg-gray-900 w-fit min-h-screen py-8 px-14 -translate-x-full transition-transform duration-300 ease-in-out flex flex-col gap-6"
        >
          {navItems.map((item, index) => {
            return (
              <li key={index} className='w-40 bg-white py-2 px-4 rounded-md'>
                <Link href={item.link} className='w-full flex justify-between items-center'>
                  <h6>{item.title}</h6>
                  <img src="/svg/angle-small-right.svg" alt="angle-small-right" className='w-4' />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
