import React from 'react';

const FooterServer = ({ children }) => {
  //! This should be fetched from an server
  const footerItems = [
    {
      title: 'About Green Coffee',
      subs: [
        'Our Company',
        'Our Coffee',
        'Stories and News',
        'Investor Relations',
        'Customer Service',
      ],
    },
    {
      title: 'Careers',
      subs: [
        'Culture and Values',
        'Diversity and Inclusion',
        'Work at Green Coffee',
        'Corporate Careers',
        'Retail Careers',
      ],
    },
    {
      title: 'Social Impact',
      subs: [
        'Overview',
        'People',
        'Planet',
        'Social Impact Reporting',
        'Environmental Impact Reporting',
      ],
    },
    {
      title: 'For Business Partners',
      subs: [
        'Landlord Support Center',
        'Corporate Gift Card Sales',
        'Branded Solutions',
      ],
    },
    {
      title: 'Order and Pickup',
      subs: [
        'Order on the App',
        'Order on the Web',
        'Delivery',
        'Order and Pickup Options',
      ],
    },
  ];

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          footerItems,
        });
      })}
    </>
  );
};

export default FooterServer;
