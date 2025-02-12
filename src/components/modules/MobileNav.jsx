'use client';
import React from 'react';
import MobileNavItem from './MobileNavItem';

const MobileNav = ({ navItems, pathArray }) => {
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

  React.useEffect(() => {
    if (showNavBackground) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showNavBackground]);

  return (
    <div className="lg:hidden">
      <div
        className={`w-6 md:w-8 h-6 md:h-8 cursor-pointer ${
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
          <img
            className="w-full"
            src="/png/cross-green-light.png"
            alt="cross-green-light"
          />
        </div>
      </div>
      <div
        onClick={handleMenu}
        className={`fixed top-0 left-0 scale-0 bg-black/50 backdrop-blur-sm w-screen h-screen ${
          showNavBackground && 'scale-100'
        }`}
      >
        <ul
          onClick={handleNavChangeMenuPrevention}
          className={`bg-gray-900 w-fit h-screen overflow-y-auto pt-8 pb-40 px-14 ${
            !isMenuOpen && '-translate-x-full'
          } transition-transform duration-300 ease-in-out flex flex-col gap-6`}
        >
          {navItems.map((item, index) => {
            return (
              <MobileNavItem
                key={index}
                item={item}
                pathArray={pathArray}
                setIsMenuOpen={setIsMenuOpen}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
