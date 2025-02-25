import React from 'react';

const RegisterForm = ({ setLoginRegister }) => {

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-full flex flex-col gap-4 max-w-80 md:gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type={'text'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">
          First name:
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type={'text'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">
          Last name:
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
          type={'text'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">
          Username:
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          type={'email'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">
          Email:
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={'password'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">
          Password:
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={'password'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">
          Confirm Password:
        </h3>
      </div>
      <div className='mt-4'>
        <button className='text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark'>Register</button>
      </div>
      <div className={`mt-4 relative before:contents-[''] before:absolute before:w-full before:h-0.5 before:bg-white before:top-0`}>
        <h2 className='mb-4 mt-4 text-white'>Already have an account?</h2>
        <button className='text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark' onClick={() => setLoginRegister('login')}>Login</button>
      </div>
    </form>
  );
};

export default RegisterForm;
