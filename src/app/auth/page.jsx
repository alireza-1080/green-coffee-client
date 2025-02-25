import React from 'react';
import AuthServer from '@/components/server/AuthServer';
import AuthContent from '@/components/modules/Auth/AuthContent';

const AuthPage = () => {
  return (
    <AuthServer>
      <AuthContent />
    </AuthServer>
  );
};

export default AuthPage;
