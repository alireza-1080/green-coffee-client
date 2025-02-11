'use client';
import React from 'react';
import Link from 'next/link';

const MobileNav = ({ navItems }) => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showNavBackground, setShowNavBackground] = React.useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavChangeMenuPrevention = (e) => {
    e.stopPropagation();
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      setShowNavBackground(true);
    } else {
      setTimeout(() => {
        setShowNavBackground(false);
      }, 301);
    }
  }, [isMenuOpen]);

  return (
    <div className="lg:hidden">
      <div
        className={`w-6 md:w-8 h-6 md:h-8 ${
          isMenuOpen ? 'fixed top-8 right-3' : 'relative'
        } z-50 transition-all`}
        onClick={handleMenu}
      >
        <div
          className={`w-6 md:w-8 absolute top-0 right-0 transition ${
            isMenuOpen && 'scale-0'
          } ${!isMenuOpen && 'delay-150'}`}
        >
          <img className="w-full" src="/svg/menu-burger.svg" alt="menu-buger" />
        </div>
        <div
          className={`w-6 md:w-8 absolute top-0 right-0 ${
            !isMenuOpen && 'scale-0'
          } transition  ${isMenuOpen && 'delay-150'}`}
        >
          <img className="w-full" src="/svg/cross.svg" alt="cross" />
        </div>
      </div>
      <div
        onClick={handleMenu}
        className={`fixed top-0 left-0 -z-40 bg-black/50 backdrop-blur-sm w-screen h-screen ${
          isMenuOpen && 'z-40'
        } ${showNavBackground && 'z-40'}`}
      >
        <ul
          onClick={handleNavChangeMenuPrevention}
          className={`bg-gray-900 w-fit h-screen overflow-y-auto py-8 px-14 ${
            !isMenuOpen && '-translate-x-full'
          } transition-transform duration-300 ease-in-out flex flex-col gap-6`}
        >
          {navItems.map((item, index) => {
            return (
              <li key={index} className="w-40 bg-gray-800 py-2 px-4 rounded-md group">
                <Link
                  href={item.link}
                  className="w-full flex justify-between items-center group-hover:text-green-light"
                >
                  <h6 className="text-gray-50 group-hover:text-green-light">{item.title}</h6>
                  <img
                    src="/svg/angle-small-right.svg"
                    alt="angle-small-right"
                    className="w-4"
                  />
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
