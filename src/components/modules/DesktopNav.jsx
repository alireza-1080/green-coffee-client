import React from 'react';
import DesktopNavItem from './DesktopNavItem';

const DesktopNav = ({ navItems, pathArray }) => {
  return (
    <div className="hidden lg:flex pl-8">
      <ul className='flex space-x-1'>
        {navItems.map((item, index) => {
          return (
            <DesktopNavItem key={index} pathArray={pathArray} item={item} />
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNav;
