import React from 'react';

const LatestArticlesServer = ({ children }) => {
  //! This should be fetched from the server
  const latestArticles = [
    {
      title:
        'The Science Behind Your Morning Cup: How Coffee Boosts Energy and Focus',
      publishDate: {
        day: '09',
        month: 'Feb',
        year: '2025',
      },
      href: '/blog/the-science-behind-your-morning-cup',
      imageUrl: '/jpg/morning-coffee.jpg',
    },
    {
      title:
        'The Science Behind Your Morning Cup: How Coffee Boosts Energy and Focus',
      publishDate: {
        day: '01',
        month: 'Feb',
        year: '2025',
      },
      href: '/blog/the-science-behind-your-morning-cup',
      imageUrl: '/jpg/morning-coffee.jpg',
    },
    {
      title:
        'The Science Behind Your Morning Cup: How Coffee Boosts Energy and Focus',
      publishDate: {
        day: '01',
        month: 'Feb',
        year: '2025',
      },
      href: '/blog/the-science-behind-your-morning-cup',
      imageUrl: '/jpg/morning-coffee.jpg',
    },
    {
      title:
        'The Science Behind Your Morning Cup: How Coffee Boosts Energy and Focus',
      publishDate: {
        day: '01',
        month: 'Feb',
        year: '2025',
      },
      href: '/blog/the-science-behind-your-morning-cup',
      imageUrl: '/jpg/morning-coffee.jpg',
    },
    {
      title:
        'The Science Behind Your Morning Cup: How Coffee Boosts Energy and Focus',
      publishDate: {
        day: '01',
        month: 'Feb',
        year: '2025',
      },
      href: '/blog/the-science-behind-your-morning-cup',
      imageUrl: '/jpg/morning-coffee.jpg',
    },
    {
      title:
        'The Science Behind Your Morning Cup: How Coffee Boosts Energy and Focus',
      publishDate: {
        day: '01',
        month: 'Feb',
        year: '2025',
      },
      href: '/blog/the-science-behind-your-morning-cup',
      imageUrl: '/jpg/morning-coffee.jpg',
    },
  ];

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { latestArticles });
      })}
    </>
  );
};

export default LatestArticlesServer;
