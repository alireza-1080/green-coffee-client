import React from 'react';

const BuyCoffeLikeProContent = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center group md:gap-8 md:h-full">
      <h3
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="250"
        className="text-green-dark font-bold text-2xl md:text-3xl"
      >
        Buy Coffee, Like A Pro
      </h3>
      <h3
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-delay="500"
      className="text-grey-dark text-xl md:text-2xl text-center">
        {`Match today's beauty with `}
        <span className="group-hover:text-green-dark group-hover:font-bold">
          coffee
        </span>
      </h3>
    </div>
  );
};

export default BuyCoffeLikeProContent;
