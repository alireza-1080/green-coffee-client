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
      title: 'Cart',
      link: '/user/cart',
      image: '/svg/shopping-cart.svg',
      alt: 'shopping-cart',
    },
    {
      title: 'Tickets',
      link: '/user/tickets',
      image: '/svg/user-headset.svg',
      alt: 'user-headset',
    },
    {
      title: 'Comments',
      link: '/user/comments',
      image: '/svg/comment-alt.svg',
      alt: 'comment-alt',
    },
    {
      title: 'Wishlist',
      link: '/user/whishlist',
      image: '/svg/wishlist-heart.svg',
      alt: 'wishlist-heart',
    },
    {
      title: 'Details',
      link: '/user/details',
      image: '/svg/attention-detail.svg',
      alt: 'attention-detail',
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
