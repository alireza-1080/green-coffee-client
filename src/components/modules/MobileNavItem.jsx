import React from 'react';
import Link from 'next/link';

const MobileNavItem = ({ item, pathArray, setIsMenuOpen }) => {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    setIsActive(item.link.split('/')[1] === pathArray[1]);
  }, [pathArray, item.link]);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Link
      href={item.link}
      onClick={handleMenuClose}
      className={`w-40 bg-gray-800 py-2 px-4 rounded-md group ${
        isActive && 'border-l-4 border-green-light'
      }`}
    >
      <li className="w-full flex justify-between items-center">
        <h6 className="text-gray-50 group-hover:text-green-light">
          {item.title}
        </h6>
        <img
          src="/svg/angle-small-right.svg"
          alt="angle-small-right"
          className="w-4"
        />
      </li>
    </Link>
  );
};

export default MobileNavItem;
