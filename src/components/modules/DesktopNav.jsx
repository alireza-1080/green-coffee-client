import React from 'react';
import Link from 'next/link';

const DesktopNav = ({ navItems }) => {
  return (
    <div className="hidden lg:flex pl-8">
      <ul className='flex space-x-1'>
        {navItems.map((item, index) => {
          return (
            <li className='text-gray-800 transition px-3 py-2 rounded-md hover:bg-green-300' key={index}>
              <Link href={item.link}>
                <h6>{item.title}</h6>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNav;
