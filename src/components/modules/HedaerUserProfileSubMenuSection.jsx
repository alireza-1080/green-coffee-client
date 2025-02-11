import React from 'react';
import Link from 'next/link';

const HedaerUserProfileSubMenuSection = ({userProfileMenu}) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 lg:left-auto lg:right-1/2 scale-0 group-hover:scale-100 md:group-hover:scale-100 origin-top-left lg:origin-top-right transition-all delay-150 w-max p-5 md:p-8 rounded-lg  bg-gray-900`}
    >
      <ul className="flex flex-col gap-2 md:gap-4">
        {userProfileMenu.map((item, index) => {
          return (
            <li className="bg-gray-800 py-2 px-4 md:py-3 md:px-5 rounded-md group/item" key={index}>
              <Link className="flex justify-between gap-4 md:gap-6" href={item.link}>
                <h6 className="min-w-fit text-gray-50 group-hover/item:text-green-light">{item.title}</h6>
                <img className="w-4" src="/svg/angle-small-right.svg" alt="" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HedaerUserProfileSubMenuSection;
