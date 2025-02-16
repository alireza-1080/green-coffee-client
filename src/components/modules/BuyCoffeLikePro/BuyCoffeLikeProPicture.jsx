import React from 'react';
import Image from 'next/image';

const BuyCoffeLikeProPicture = () => {
  return (
    <div className="w-11/12 h-fit flex justify-center items-center">
      <Image
        data-aos="fade-left"
        data-aos-once="true"
        className="width-full h-fit"
        src={'/png/coffee-pro-1 copy.png'}
        width={378}
        height={281}
        alt="coffee-pro-1"
      ></Image>
    </div>
  );
};

export default BuyCoffeLikeProPicture;
