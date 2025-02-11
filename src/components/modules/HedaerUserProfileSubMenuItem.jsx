import React from 'react';
import Link from 'next/link';

const HedaerUserProfileSubMenuItem = ({ item, pathArray }) => {
  const [isActive, setIsActive] = React.useState(false);
  const ItemLinkArray = item.link.split('/');
console.log('ItemLinkArray', ItemLinkArray);
  console.log('pathArray', pathArray);


  React.useEffect(() => {
    pathArray[1] === ItemLinkArray[1] && pathArray[2] === ItemLinkArray[2] && setIsActive(true);
  }, [pathArray, ItemLinkArray]);

  return (
    <li className={`bg-gray-800 py-2 px-4 md:py-3 md:px-5 rounded-md group/item ${isActive && 'border-l-4 border-green-light'}`}>
      <Link className="flex justify-between gap-4 md:gap-6" href={item.link}>
        <h6 className="min-w-fit text-gray-50 group-hover/item:text-green-light">
          {item.title}
        </h6>
        <img className="w-4" src="/svg/angle-small-right.svg" alt="" />
      </Link>
    </li>
  );
};

export default HedaerUserProfileSubMenuItem;
