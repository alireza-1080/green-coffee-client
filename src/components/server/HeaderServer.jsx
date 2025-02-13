import React from 'react';

const HeaderServer = ({ children }) => {
  //! This should be fetched from the backend
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Products', link: '/products' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' },
    { title: 'About', link: '/about' },
    { title: 'Rules', link: '/rules' },
  ];

  //! This should be fetched from the backend
  const userProfileMenu = [
    {
      title: 'Profile',
      link: '/user',
    },
    {
      title: 'Cart',
      link: '/user/cart',
    },
    {
      title: 'Tickets',
      link: '/user/tickets',
    },
    {
      title: 'Comments',
      link: '/user/comments',
    },
    {
      title: 'Wishlist',
      link: '/user/whishlist',
    },
    {
      title: 'Details',
      link: '/user/details',
    },
  ];

  //! This should be fetched from the backend
  const isUserLoggedIn = true;

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          navItems,
          userProfileMenu,
          isUserLoggedIn,
        });
      })}
    </>
  );
};

export default HeaderServer;
