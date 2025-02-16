'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const HedaerSlider = () => {
  return (
    <>
      {/* //! Desktop Slider */}
      <div
      data-aos={'zoom-in'}
      data-aos-once={true}
      className="hidden md:block lg:container mx-auto lg:-mt-[160px]">
        <Swiper
          className="mySwiper w-full"
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          loop={true}
        >
          <SwiperSlide>
            <Image
              src={'/slider/desktop/slider-1.jpg'}
              width={1600}
              height={900}
              quality={100}
              alt="slider-1"
              className="w-full"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/slider/desktop/slider-2.jpg'}
              width={1600}
              height={900}
              quality={100}
              alt="slider-2"
              className="w-full"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/slider/desktop/slider-3.jpg'}
              width={1600}
              height={900}
              quality={100}
              alt="slider-3"
              className="w-full"
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/slider/desktop/slider-4.jpg'}
              width={1600}
              height={900}
              quality={100}
              alt="slider-4"
              className="w-full"
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* //! Mobile Slider */}
      <div
      data-aos={'zoom-in'}
      data-aos-once={true}
      className="md:hidden w-full h-full mx-auto ">
        <Swiper
          className="mySwiper w-full h-fit"
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          loop={true}
        >
          <SwiperSlide>
            <div className="relative w-full aspect-[9/16]">
              <Image
                src={'/slider/mobile/slider-1.jpg'}
                width={900}
                height={1600}
                quality={100}
                alt="slider-1"
                className="absolute inset-0 w-full h-full object-cover"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-[9/16]">
              <Image
                src={'/slider/mobile/slider-2.jpg'}
                width={900}
                height={1600}
                quality={100}
                alt="slider-1"
                className="absolute inset-0 w-full h-full object-cover"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-[9/16]">
              <Image
                src={'/slider/mobile/slider-3.jpg'}
                width={900}
                height={1600}
                quality={100}
                alt="slider-1"
                className="absolute inset-0 w-full h-full object-cover"
              ></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full aspect-[9/16]">
              <Image
                src={'/slider/mobile/slider-4.jpg'}
                width={900}
                height={1600}
                quality={100}
                alt="slider-1"
                className="absolute inset-0 w-full h-full object-cover"
              ></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HedaerSlider;
