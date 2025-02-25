import React from 'react';
import SendCodeToEmail from './SendCodeToEmail';
import ValidateCode from './ValidateCode';
import ChangePassword from './ChangePassword';

const ForgetPassword = ({ setLoginRegisterForget }) => {
  const [step, setStep] = React.useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLoginClick = () => {
    setLoginRegisterForget('login');
    setStep(1);
  };

  const handleRegisterClick = () => {
    setLoginRegisterForget('register');
    setStep(1);
  };

  return (
    <form
      className="w-full flex flex-col gap-4 max-w-80 md:gap-6"
      onSubmit={handleSubmit}
    >
      {step === 1 ? (
        <SendCodeToEmail setStep={setStep} />
      ) : step === 2 ? (
        <ValidateCode setStep={setStep} />
      ) : (
        <ChangePassword setStep={setStep} />
      )}
      <div
        className={`relative before:contents-[''] before:absolute before:w-full before:h-0.5 before:bg-white before:top-0 flex flex-col gap-4 md:gap-6`}
      >
        <h2 className="mt-4 md:mt-6 text-white">Don't have an account?</h2>
        <button
          className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all "
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default ForgetPassword;
