import React from 'react';
import LatestProductsTopSection from './LatestArticlesTopSection';
import LatestArticlesSlider from './LatestArticlesSlider';

const LatestArticlesSliderSection = ({ latestArticles }) => {
  return (
    <div className="bg-white lg:container mx-auto overflow-hidden py-10 px-5">
      <LatestProductsTopSection />
      <LatestArticlesSlider latestArticles={latestArticles} />
    </div>
  );
};

export default LatestArticlesSliderSection;





