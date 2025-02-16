'use client';
import React from 'react';
import Image from 'next/image';

const StarRatingReadOnly = ({ rating }) => {
  const [roundValue, setRoundValue] = React.useState(Math.round(rating));

    React.useEffect(() => {
    setRoundValue(Math.round(rating));
    }, [rating]);

  return (
    <div className="flex gap-3 justify-center items-center bg-white">
      <div className='flex gap-1'>
        {[...Array(roundValue)].map((_, index) => (
          <Image
            src="/png/star-full.png"
            width={300}
            height={300}
            alt="star"
            key={index}
            className='w-4 h-4'
          />
        ))}
        {
            [...Array(5 - roundValue)].map((_, index) => (
                <Image
                src="/png/star-empty.png"
                width={300}
                height={300}
                alt="star"
                key={index}
                className='w-4 h-4'
                />
            ))
        }
      </div>
      <div>
        <p className='font-medium'>{rating}</p>
      </div>
    </div>
  );
};

export default StarRatingReadOnly;
