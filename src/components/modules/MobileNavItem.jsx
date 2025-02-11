import React from 'react';
import Link from 'next/link';

const MobileNavItem = ({item, pathArray}) => {
    const [isActive, setIsActive] = React.useState(false);
    
      React.useEffect(() => {
        setIsActive(item.link.split('/')[1] === pathArray[1])
      }, [pathArray, item.link]);

  return (
    <li className={`w-40 bg-gray-800 py-2 px-4 rounded-md group ${isActive && 'border-l-4 border-green-light'}`}>
      <Link
        href={item.link}
        className="w-full flex justify-between items-center group-hover:text-green-light"
      >
        <h6 className="text-gray-50 group-hover:text-green-light">
          {item.title}
        </h6>
        <img
          src="/svg/angle-small-right.svg"
          alt="angle-small-right"
          className="w-4"
        />
      </Link>
    </li>
  );
};

export default MobileNavItem;
