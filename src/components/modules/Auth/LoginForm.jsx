'use client';
import React from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import emailValidator from '@/validators/email.js';
import usernameValidator from '@/validators/username.js';
import passwordValidator from '@/validators/password.js';
import { redirect } from 'next/navigation';

const LoginForm = ({ setLoginRegisterForget }) => {
  const [identifier, setIdentifier] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    //! Check if identifier is a valid email
    const { value: validatedEmail, error: emailError } =
    emailValidator.validate(identifier.trim());
    
    //! Check if identifier is a valid username
    const { value: validatedUsername, error: usernameError } =
    usernameValidator.validate(identifier.trim());
    
    if (emailError && usernameError) {
      return toast.error('Invalid email or username');
    }
    
    setIdentifier(identifier.trim());
    
    //! Check if password is a valid password
    const { value: validatedPassword, error: passwordError } =
    passwordValidator.validate(password);
    
    if (passwordError) {
      return toast.error('Invalid password');
    }
    
    //! Send login request to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        identifier,
        password,
        rememberMe,
      }),
    });

    const data = response.json();
    
    toast.success(data.message);

    if (response.ok) {
      toast.success('Logged in successfully');
      redirect('/');
    } else {
      toast.error('Invalid credentials');
    }

  };

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value.toLowerCase());
  };

  return (
    <form
      className="w-full flex flex-col gap-4 max-w-80 md:gap-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <input
          type={'text'}
          value={identifier}
          onChange={handleIdentifierChange}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all sm:w-full"
        />
        <h3 className="text-green-light order-1 transition-all">
          Username/Email:
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={'password'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">Password:</h3>
      </div>
      <div className="flex items-center gap-2 mt-4 mx-1">
        <div
          onClick={() => setRememberMe(!rememberMe)}
          className="w-4 h-4 outline-2 outline outline-green-light rounded-full relative cursor-pointer"
        >
          <Image
            src={'/png/check-green-dark.png'}
            width={20}
            height={20}
            alt="check-green-dark"
            className={`w-7 h-7 absolute -bottom-[2px] left-[2px] origin-center transition ${
              rememberMe ? 'scale-100' : 'scale-0'
            }`}
          ></Image>
        </div>
        <h3
          onClick={() => setRememberMe(!rememberMe)}
          className="text-white cursor-pointer"
        >
          Remember me!
        </h3>
      </div>
      <div className="mt-4">
        <button className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all">
          Login
        </button>
      </div>
      <div
        className="flex justify-center"
        onClick={() => setLoginRegisterForget('forget')}
      >
        <h2 className="text-white cursor-pointer">Forget password?</h2>
      </div>
      <div
        className={`relative before:contents-[''] before:absolute before:w-full before:h-0.5 before:bg-white before:top-0`}
      >
        <h2 className="mb-4 mt-4 text-white">Don't have an account?</h2>
        <button
          className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all"
          onClick={() => setLoginRegisterForget('register')}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
