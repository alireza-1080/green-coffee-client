import React from 'react';
import Image from 'next/image';

const WhatMakesUsDifferentImage = () => {
  return (
    <div className="w-11/12 max-w-[378px] h-fit flex justify-center items-center">
      <Image
        className="width-full h-fit rounded-full"
        src={'/jpg/gold-coffee-award.jpg'}
        width={1000}
        height={1000}
        alt="gold-coffee-award"
      ></Image>
    </div>
  );
};

export default WhatMakesUsDifferentImage;
