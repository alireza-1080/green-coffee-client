import React from 'react';
import WhatMakesUsDifferentContentTitle from './WhatMakesUsDifferentTitle.jsx';
import WhatMakesUsDifferentContentItem from './WhatMakesUsDifferentItem.jsx';

const WhatMakesUsDifferentContent = () => {
  return (
    <div className="w-fit mx-auto flex flex-col gap-5 lg:gap-10">
      <div
        data-aos="zoom-in-down"
        data-aos-once="true"
        className="flex justify-center"
      >
        <WhatMakesUsDifferentContentTitle />
      </div>
      <div className="flex flex-col gap-2 lg:gap-5">
        <div data-aos="zoom-in-left"
        data-aos-once="true">
          <WhatMakesUsDifferentContentItem content={'Premium quality beans'} />
        </div>
        <div data-aos="zoom-in-left"
        data-aos-once="true">
          <WhatMakesUsDifferentContentItem
            content={'Ethical and sustainable sourcing'}
          />
        </div>
        <div data-aos="zoom-in-left"
        data-aos-once="true">
          <WhatMakesUsDifferentContentItem content={'Competitive pricing'} />
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferentContent;
