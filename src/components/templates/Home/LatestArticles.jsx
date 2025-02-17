import React from 'react';
import LatestArticlesServer from '@/components/server/LatestArticlesServer';
import LatestArticlesSlider from '@/components/modules/LatestArticles/LatestArticlesSlider';

const LatestArticles = () => {
  return (
    <div>
      <LatestArticlesServer>
        <LatestArticlesSlider />
      </LatestArticlesServer>
    </div>
  );
};

export default LatestArticles;
