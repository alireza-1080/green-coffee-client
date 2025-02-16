import React from 'react';
import LatestProductsTopSection from './LatestProductsTopSection';
import LatestProductItem from './LatestProductItem';

const LatestProductsContainer = ({ latestProducts }) => {
  return (
    <div data-aos='zoom-in'  className="flex flex-col bg-white py-10 lg:container mx-auto">
      <LatestProductsTopSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
        {latestProducts.map((product, index) => (
          <LatestProductItem key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default LatestProductsContainer;
