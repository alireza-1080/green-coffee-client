import React from 'react';
import { cookies } from 'next/headers';

const HeaderServer = async ({ children }) => {
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
  const cookieStore = await cookies();
  const greenCoffeeToken = cookieStore.get('green-coffee-token')?.value;

  const response = await fetch(
    'https://green-coffee-server.vercel.app/api/users/is-user-logged-in',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${greenCoffeeToken}`,
      },
      credentials: 'include',
    }
  );

  const isUserLoggedIn = response.ok;

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
