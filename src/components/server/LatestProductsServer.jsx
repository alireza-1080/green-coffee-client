import React from 'react';

const LatestProductsServer = ({ children }) => {
  //! This should be fetched from the server
  const latestProducts = [
    {
      title: 'Arabica coffee beans',
      price: 20,
      image: '/products/coffee_bag_mockup.png',
      href: 'href-1',
      rating: 3.5,
    },
    {
      title: 'Arabica coffee beans',
      price: 20,
      image: '/products/coffee_bag_mockup.png',
      href: 'href-1',
      rating: 4.5,
    },
    {
      title: 'Arabica coffee beans',
      price: 20,
      image: '/products/coffee_bag_mockup.png',
      href: 'href-1',
      rating: 4.5,
    },
    {
      title: 'Arabica coffee beans',
      price: 20,
      image: '/products/coffee_bag_mockup.png',
      href: 'href-1',
      rating: 3.5,
    },
    {
      title: 'Arabica coffee beans',
      price: 20,
      image: '/products/coffee_bag_mockup.png',
      href: 'href-1',
      rating: 2.5,
    },
    {
      title: 'Arabica coffee beans',
      price: 20,
      image: '/products/coffee_bag_mockup.png',
      href: 'href-1',
      rating: 4.5,
    },
    {
      title: 'Arabica coffee beans',
      price: 20,
      image: '/products/coffee_bag_mockup.png',
      href: 'href-1',
      rating: 4.5,
    },
    {
      title: 'Arabica coffee beans',
      price: 20,
      image: '/products/coffee_bag_mockup.png',
      href: 'href-1',
      rating: 4.5,
    },
  ];

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { latestProducts });
      })}
    </>
  );
};

export default LatestProductsServer;
