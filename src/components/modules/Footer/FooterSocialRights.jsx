'use client';
import React from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';

const FooterSocialRights = () => {
  const handleDemoLink = () => {
    toast('The link is not active.', {
      icon: '☕',
    });
  };

  return (
    <div className='w-full bg-green-dark px-5 py-10 flex flex-col justify-center items-center gap-5 relative before:content-[""] before:w-11/12 before:h-1 before:bg-white before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 lg:container lg:mx-auto '>
      <div className="flex gap-5">
        <Image
          onClick={handleDemoLink}
          className="cursor-pointer w-10 h-10"
          src={'/png/facebook.png'}
          width={100}
          height={100}
          alt="facebook"
        ></Image>
        <Image
          onClick={handleDemoLink}
          className="cursor-pointer w-10 h-10"
          src={'/png/Instagram.png'}
          width={100}
          height={100}
          alt="instagram"
        ></Image>
        <Image
          onClick={handleDemoLink}
          className="cursor-pointer w-10 h-10"
          src={'/png/twitter.png'}
          width={100}
          height={100}
          alt="x"
        ></Image>
      </div>
      <div>
        <p className="text-white font-extralight text-sm">
          © {new Date().getFullYear()} Green Coffee Company. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterSocialRights;
