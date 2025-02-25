import React from 'react';
import passwordValidator from '@/validators/password';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();

    //! Validate password
    const { error: passwordError } = passwordValidator.validate(password);

    if (passwordError) {
      return toast.error(passwordError.message);
    }

    //! Confirm password
    if (password !== confirmPassword) {
      return toast.error('Passwords do not match');
    }

    //! Change password request should be sent to the server here
    toast.success('Password changed successfully');
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={'password'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all sm:w-full"
        />
        <h3 className="text-green-light order-1 transition-all">
          New password:
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={'password'}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all sm:w-full"
        />
        <h3 className="text-green-light order-1 transition-all">
          Confirm new password:
        </h3>
      </div>
      <div>
        <button
        onClick={handleChangePassword}
        className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all">
          Change password
        </button>
      </div>
    </>
  );
};

export default ChangePassword;
