import React from 'react';
import FooterListGroup from '@/components/modules/Footer/FooterListGroup';

const FooterContent = ({ footerItems }) => {
  console.log(footerItems);

  return (
    <div className="w-full bg-green-dark text-white py-10 px-5 md:text-lg lg:container lg:mx-auto">
      <div className="lg:flex lg:justify-between lg:gap-10">
        {footerItems.map((item, index) => (
          <FooterListGroup key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FooterContent;
