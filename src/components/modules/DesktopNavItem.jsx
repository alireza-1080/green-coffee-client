'use client';
import React from 'react';
import Link from 'next/link';

const DesktopNavItem = ({ pathArray, item }) => {
  const [isActive] = React.useState(item.link === `/${pathArray}`);

  if (item.title === 'Home') {
    console.log(item.link === `/${pathArray}`)
  }

  return (
    <Link href={item.link}>
      <li
        className={`text-gray-800 transition-all px-3 py-2 rounded-md bg-white hover:bg-green-light`}
      >
        <h6
          className={`font-bold ${
            isActive && 'text-green-dark underline underline-offset-8'
          }`}
        >
          {item.title}
        </h6>
      </li>
    </Link>
  );
};

export default DesktopNavItem;
