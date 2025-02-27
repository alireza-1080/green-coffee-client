import React from 'react';
import nameValidator from '@/validators/name';
import usernameValidator from '@/validators/username';
import emailValidator from '@/validators/email';
import passwordValidator from '@/validators/password';
import toast from 'react-hot-toast';

const RegisterForm = ({ setLoginRegisterForget }) => {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    //! Validate name
    const {value: nameValue, error: nameError } = nameValidator.validate(name);

    if (nameError) {
     return toast.error(nameError.message);
    }

    setName(nameValue);

    //! Validate username
    const {value: usernameValue, error: usernameError } = usernameValidator.validate(username);

    if (usernameError) {
      return toast.error(usernameError.message);
    }

    setUsername(usernameValue);

    //! Validate email
    const {value: emailValue, error: emailError } = emailValidator.validate(email);
    console.log(emailValue)
    if (emailError) {
      return toast.error(emailError.message);
    }

    setEmail(emailValue);

    //! Validate password
    const { error: passwordError } = passwordValidator.validate(password);

    if (passwordError) {
      return toast.error(passwordError.message);
    }

    //! Confirm password
    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }

    //! Send registration request to the server
    const response = await fetch('/api/users/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameValue,
        username: usernameValue,
        email: emailValue,
        password,
        confirmPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message);
      setLoginRegisterForget('login');
    } else {
      toast.error(data.message);
    }

    
  };

  const handleNameChange = (e) => {
    const titleCased = e.target.value.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });

    setName(titleCased);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value.toLowerCase());
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
  }

  return (
    <form
      className="w-full flex flex-col gap-4 max-w-80 md:gap-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <input
          value={name}
          onChange={handleNameChange}
          type={'text'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">Name:</h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={username}
          onChange={handleUsernameChange}
          type={'text'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">Username:</h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={email}
          onChange={handleEmailChange}
          type={'email'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all"
        />
        <h3 className="text-green-light order-1 transition-all">Email:</h3>
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
      <div className="mt-4">
        <button className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all">
          Register
        </button>
      </div>
      <div
        className={`mt-4 relative before:contents-[''] before:absolute before:w-full before:h-0.5 before:bg-white before:top-0`}
      >
        <h2 className="mb-4 mt-4 text-white">Already have an account?</h2>
        <button
          type={'submit'}
          className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all"
          onClick={() => setLoginRegisterForget('login')}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
