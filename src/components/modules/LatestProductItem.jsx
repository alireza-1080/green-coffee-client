import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StarRatingReadOnly from './StarRatingReadOnly';

const LatestProductItem = ({ product, index }) => {
  return (
    <Link
      data-aos="fade-up"
      className={`w-full group/item relative ${index >= 3 ? 'hidden' : ''}
      ${index >= 3 && index < 4 ? 'sm:block' : ''}
      ${index >= 4 && index < 6 ? 'md:block' : ''}
      ${index >= 6 ? 'lg:block' : ''}`}
      href={`/products/${product.href}`}
    >
      <div className="flex flex-col gap-3 w-full justify-center items-center shadow-lg p-4 bg-white rounded-lg group-hover/item:shadow-green-light transition-all">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-11/12 max-w-64 mb-4 relative group-hover/item:scale-110"
        />
        <div>
          <StarRatingReadOnly rating={product.rating} />
        </div>
        <h2 className="font-semibold">{product.title}</h2>
        <p className="font-semibold">{`Price: $${product.price}`}</p>
      </div>
    </Link>
  );
};

export default LatestProductItem;
