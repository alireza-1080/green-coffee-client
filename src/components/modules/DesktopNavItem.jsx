import React from 'react';
import Link from 'next/link';

const DesktopNavItem = ({ pathArray, item }) => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(item.link.split('/')[1] === pathArray[1])
  }, [pathArray, item.link]);

  return (
    <Link href={item.link}>
      <li
        className={`text-gray-800 transition-all px-3 py-2 rounded-md  hover:bg-green-light`}
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
