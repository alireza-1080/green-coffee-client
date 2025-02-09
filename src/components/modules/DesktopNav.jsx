import React from 'react';
import Link from 'next/link';

const DesktopNav = ({ navItems }) => {
  return (
    <div className="hidden md:flex pl-8">
      <ul className='flex space-x-4'>
        {navItems.map((item, index) => {
          return (
            <li className='text-gray-800 hover:text-green-700 transition' key={index}>
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
