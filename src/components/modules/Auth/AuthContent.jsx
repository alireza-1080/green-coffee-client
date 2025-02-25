'use client';
import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthContent = () => {

  const [loginRegister, setLoginRegister] = React.useState('login');

  return (
    <div className="w-full min-h-screen h-fit overflow-y-auto py-10 sm:mx-auto">
      <div className="w-full h-full lg:container lg:mx-auto flex justify-center items-center">
        <div className="bg-sky-500 w-60 h-60 rounded-full fixed top-2/4 left-1/2 -translate-y-full -z-50"></div>
        <div className="bg-pink-500 w-40 h-40 rounded-full fixed top-1/2 left-1/2 -translate-x-full translate-y-2/3 -z-50"></div>
        <div className="w-11/12 h-fit bg-black/40 backdrop-blur-md rounded-lg p-10 max-w-lg">
          {loginRegister === 'login' ? (
            <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                <LoginForm setLoginRegister={setLoginRegister}/>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center transition-all duration-300">
              <RegisterForm setLoginRegister={setLoginRegister}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
