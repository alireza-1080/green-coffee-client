import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeaderImage = () => {
  return (
    <Link href="/">
      <Image
        priority
        className="w-20 h-20"
        src={'/png/logo-text.png'}
        width={100}
        height={100}
        alt="Green Coffee Logo"
      ></Image>
    </Link>
  );
};

export default HeaderImage;
