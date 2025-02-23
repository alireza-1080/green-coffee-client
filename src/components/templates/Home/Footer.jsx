import React from 'react';
import FooterServer from '@/components/server/FooterServer';
import FooterContent from '@/components/modules/Footer/FooterContent';
import FooterSocialRights from '@/components/modules/Footer/FooterSocialRights';

const Footer = () => {
  return (
    <FooterServer>
      <FooterContent />
      <FooterSocialRights />
    </FooterServer>
  );
};

export default Footer;
