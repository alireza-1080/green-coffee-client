import React from 'react';
import { redirect } from 'next/navigation';

const AuthServer = ({ children }) => {
  //! This should be fetched from an server
  const isUserLoggedIn = false;

  if (isUserLoggedIn) {
    redirect('/');
    }

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          isUserLoggedIn,
        });
      })}
    </>
  );
};

export default AuthServer;
