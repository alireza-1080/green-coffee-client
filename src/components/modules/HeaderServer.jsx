import React from 'react'
import Header from './Header.jsx';

const HeaderServer = () => {

    //! This should be fetched from the backend
  const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Shop', link: '/shop' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' },
    { title: 'About', link: '/about' },
    { title: 'Rules', link: '/rules' },
  ];

  //! This should be fetched from the backend
  const userProfileMenu = [
    {
      title: 'Cart',
      link: '/cart',
      image: '/svg/shopping-cart.svg',
      alt: 'shopping-cart',
    },
    {
      title: 'Tickets',
      link: '/tickets',
      image: '/svg/user-headset.svg',
      alt: 'user-headset',
    },
    {
      title: 'Comments',
      link: '/comments',
      image: '/svg/comment-alt.svg',
      alt: 'comment-alt',
    },
    {
      title: 'Wishlist',
      link: '/whishlist',
      image: '/svg/wishlist-heart.svg',
      alt: 'wishlist-heart',
    },
    {
      title: 'Details',
      link: '/details',
      image: '/svg/attention-detail.svg',
      alt: 'attention-detail',
    },
  ];

  //! This should be fetched from the backend
  const isUserLoggedIn = true;

  return (
    <>
    <Header navItems={navItems} userProfileMenu={userProfileMenu} isUserLoggedIn={isUserLoggedIn} />
    </>
  )
}

export default HeaderServer