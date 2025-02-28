import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const AuthServer = async ({ children }) => {

  //! Get green-coffee-token from cookies
  const cookieStore = await cookies();
  const greenCoffeeToken = cookieStore.get('green-coffee-token')?.value;

  
  //! Send request to the server to check if user is logged in
  const response = await fetch('https://green-coffee-server.vercel.app/api/users/is-user-logged-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${greenCoffeeToken}`,
    },
    credentials: 'include',
  });
  
  const isUserLoggedIn = response.ok;

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
