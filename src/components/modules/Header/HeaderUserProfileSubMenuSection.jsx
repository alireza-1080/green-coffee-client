import React from 'react';
import HeaderUserProfileSubMenuItem from './HeaderUserProfileSubMenuItem.jsx';
import Logout from './Logout.jsx';

const HeaderUserProfileSubMenuSection = ({ userProfileMenu, pathArray }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 lg:left-auto lg:right-1/2 scale-0 group-hover:scale-100 md:group-hover:scale-100 origin-top-left lg:origin-top-right transition-all delay-150 w-max p-5 md:p-8 rounded-lg  bg-gray-900`}
    >
      <ul className="flex flex-col gap-2 md:gap-4">
        {userProfileMenu.map((item, index) => {
          return (
            <HeaderUserProfileSubMenuItem item={item} key={index} pathArray={pathArray} />
          );
        })}
        <Logout />
      </ul>
    </div>
  );
};

export default HeaderUserProfileSubMenuSection;
