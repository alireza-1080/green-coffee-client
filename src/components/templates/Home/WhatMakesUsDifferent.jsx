import React from 'react';
import WhatMakesUsDifferentContent from '@/components/modules/WhatMakesUsDifferent/WhatMakesUsDifferentContent';
import WhatMakesUsDifferentImage from '@/components/modules/WhatMakesUsDifferent/WhatMakesUsDifferentImage';

const WhatMakesUsDifferent = () => {
  return (
    <div className="w-full h-fit bg-gray-200 border-t-2 border-green-dark py-10 sm:px-5 sm:py-16 lg:container mx-auto">
      <div className="flex flex-col gap-10 sm:mx-5 md:flex-row md:gap-0 md:justify-between md:items-center md:h-full">
        <div className='sm:self-start md:order-2 md:self-center md:justify-self-end'>
          <WhatMakesUsDifferentContent />
        </div>
        <div 
        data-aos="zoom-in-right"
        data-aos-once="true"
        data-aos-delay="700"
        className="flex justify-center sm:self-end md:order-1 md:jsutify-self-center">
          <WhatMakesUsDifferentImage />
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;
