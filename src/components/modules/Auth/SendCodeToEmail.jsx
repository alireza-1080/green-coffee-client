import React from 'react';
import toast from 'react-hot-toast';

const SendCodeToEmail = ({ setStep }) => {

    const [identifier, setIdentifier] = React.useState('');

    const handleIdentifierChange = (e) => {
        setIdentifier(e.target.value.toLowerCase());
      };

      const handleSendCodeClick = () => {
        if (!identifier) {
          return toast.error('Username/Email cannot be empty');
        }

        setIdentifier(identifier.trim());

        //! Send request to server to send code to email
        //! If successful, set step to 2
    
        setStep(2);
      };

  return (
    <>
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
      <div>
        <button
          onClick={handleSendCodeClick}
          className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all"
        >
          Send code to email
        </button>
      </div>
    </>
  );
};

export default SendCodeToEmail;
