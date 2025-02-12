import React from 'react';
import HomePageNavigation from '../modules/HomePageNavigation.jsx';
import HedaerSlider from '../modules/HomePageSlider.jsx';
import HeaderServer from '../modules/HeaderServer.jsx';

const HomePageHeader = () => {
  return (
    <>
      <div className="lg:container mx-auto sticky top-0 z-50 ">
        <HeaderServer>
          <HomePageNavigation />
        </HeaderServer>
      </div>
      <HedaerSlider />
    </>
  );
};

export default HomePageHeader;
