'use client';
import React from 'react';
import Image from 'next/image';

const FooterListGroup = ({ item }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-fit">
      <div
        onClick={handleOpen}
        className="w-full flex justify-between items-center cursor-pointer py-5"
      >
        <h2 className="font-semibold">{item.title}</h2>
        <Image
          src={'/png/angle-small-down-white.png'}
          width={20}
          height={20}
          alt="angle-small-down-white"
          className={`w-6 h-6 ${
            isOpen ? 'transform rotate-180' : ''
          } transition-transform duration-300 lg:hidden`}
        ></Image>
      </div>
      <div
        className={`flex flex-col origin-top ${
          !isOpen ? 'max-h-0' : 'max-h-screen'
        } overflow-hidden transition-[max-height] duration-300 lg:max-h-screen`}
      >
        {item.subs.map((sub, index) => (
          <p
            key={index}
            className="px-5 py-3 lg:px-0 lg:text:normal text-gray-300 cursor-pointer hover:text-green-light"
          >
            {sub}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterListGroup;
