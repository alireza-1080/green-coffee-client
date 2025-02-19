'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const LatestArticlesSlider = ({ latestArticles }) => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {latestArticles.map((article, index) => (
          <SwiperSlide
            key={`${article.title}-${index}`}
            className="w-full h-fit overflow-hidden relative group max-w-full md:max-w-[393.33px] rounded-lg"
          >
            <Link href={article.href} className="block">
              <Image
                src={'/jpg/morning-coffee.jpg'}
                width={1007}
                height={1410}
                alt={article.title}
                className="w-full h-auto"
              ></Image>
              <div className="absolute top-5 left-5 flex flex-col items-center bg-green-dark text-white p-2 rounded-md">
                <span>{parseInt(article.publishDate.day).toString()}</span>
                <span>{article.publishDate.month}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 text-white bg-black/50 group-hover:bg-black/80 backdrop-blur-md m-2 p-2 rounded-md">
                <h2>{article.title}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LatestArticlesSlider;
