import React from 'react';
import Link from 'next/link';

const HedaerUserProfileSubMenuItem = ({ item, pathArray }) => {
  const [isActive, setIsActive] = React.useState(false);
  const ItemLinkArray = item.link.split('/');

  React.useEffect(() => {
    if (pathArray[1] === ItemLinkArray[1] && pathArray[2] === ItemLinkArray[2]) {
     return  setIsActive(true);
    }
    return setIsActive(false);
  }, [pathArray[1], pathArray[2], ItemLinkArray[1], ItemLinkArray[2]]);

  return (
    <Link
      className={`bg-gray-800 py-2 px-4 md:py-3 md:px-5 rounded-md group/item ${
        isActive && 'border-l-4 border-green-light'
      }`}
      href={item.link}
    >
      <li className="flex justify-between gap-4 md:gap-6">
        <h6 className="min-w-fit text-gray-50 group-hover/item:text-green-light">
          {item.title}
        </h6>
        <img className="w-4" src="/svg/angle-small-right.svg" alt="" />
      </li>
    </Link>
  );
};

export default HedaerUserProfileSubMenuItem;
