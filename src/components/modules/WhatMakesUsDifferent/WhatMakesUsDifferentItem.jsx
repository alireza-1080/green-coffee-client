import React from 'react';
import Image from 'next/image';

const WhatMakesUsDifferentItem = ({ content }) => {
  return (
    <div className='flex items-center gap-3'>
      <Image
      className='w-5 h-5 lg:w-7 lg:h-7'
        src="/png/check-green-light.png"
        width={300}
        height={300}
        alt="check-green-light"
      />
      <h2 className='text-grey-dark text-xl lg:text-2xl'>{content}</h2>
    </div>
  );
};

export default WhatMakesUsDifferentItem;
