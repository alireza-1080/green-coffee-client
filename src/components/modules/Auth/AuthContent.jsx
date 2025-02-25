'use client';
import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgetPassword from './ForgetPassword';

const AuthContent = () => {
  const [loginRegisterForget, setLoginRegisterForget] = React.useState('login');

  return (
    <div className="w-full min-h-screen h-fit overflow-y-auto py-10 sm:mx-auto">
      <div className="w-full h-full lg:container lg:mx-auto flex justify-center items-center">
        <div className="w-11/12 h-fit  rounded-lg max-w-lg relative z-10">
          <div className="bg-sky-500 w-64 h-64 rounded-full absolute top-0 right-0 translate-x-1/3 translate-y-5 -z-50"></div>
          <div className="bg-pink-500 w-48 h-48 rounded-full absolute bottom-0 left-0 -translate-x-1/4 -translate-y-1/3 -z-50"></div>
          <div className='w-full h-full bg-black/40 backdrop-blur-md p-10 rounded-lg'>
            {loginRegisterForget === 'login' ? (
              <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                <LoginForm setLoginRegisterForget={setLoginRegisterForget} />
              </div>
            ) : loginRegisterForget === 'register' ? (
              <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                <RegisterForm setLoginRegisterForget={setLoginRegisterForget} />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                <ForgetPassword
                  setLoginRegisterForget={setLoginRegisterForget}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContent;
