import React from 'react';
import HomePageNavigation from '@/components/modules/HomePageNavigation.jsx';
import HomePageSlider from '@/components/modules/HomePageSlider.jsx';
import HeaderServer from '@/components/server/HeaderServer.jsx';

const HomePageHeader = () => {
  return (
    <>
      <div className="lg:container mx-auto sticky top-0 z-50 ">
        <HeaderServer>
          <HomePageNavigation />
        </HeaderServer>
      </div>
      <HomePageSlider />
    </>
  );
};

export default HomePageHeader;
