import React from 'react'
import toast from 'react-hot-toast'

const ValidateCode = ({setStep}) => {

    const [code, setCode] = React.useState('');

    const handleChangeCode = (e) => {
        if (e.target.value.length > 6) {
          return;
        }

        if (isNaN(e.target.value)) {
          return;
        }

        setCode(e.target.value);
      };
      
      const handleContinueClick = () => {
        if (code.length !== 6) {
          return toast.error('Code must be 6 digits');
        }
      
        //! Send request to server to validate code
        //! If successful, set step to 3
        
        setStep(3);
      };
  return (
    <>
        <div className="flex flex-col gap-2">
        <input
          type={'text'}
          value={code}
          onChange={handleChangeCode}
          className="rounded-md px-4 py-1 outline-none border-2 border-solid border-green-light focus:border-4 order-2 transition-all sm:w-full"
        />
        <h3 className="text-green-light order-1 transition-all">
          6-digit code:
        </h3>
      </div>
      <div>
        <button
          onClick={handleContinueClick}
          className="text-white w-full bg-green-dark px-4 py-1 rounded-md outline outline-2 outline-transparent hover:outline-green-dark transition-all"
        >
          Continue
        </button>
      </div>
    </>
  )
}

export default ValidateCode