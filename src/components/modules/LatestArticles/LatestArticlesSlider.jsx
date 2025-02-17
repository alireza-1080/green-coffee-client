'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const LatestArticlesSlider = ({ latestArticles }) => {
  return (
    <div className="bg-white lg:container mx-auto overflow-hidden py-10 px-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {latestArticles.map((article, index) => (
          <SwiperSlide
            className="w-full h-fit overflow-hidden relative group max-w-80 xl:max-w-[393.33px] rounded-lg"
            key={`article-${index}`}
          >
            <Link href={article.href} className="block">
              <Image
                src={'/jpg/morning-coffee.jpg'}
                width={1007}
                height={1410}
                alt={article.title}
              ></Image>
              <div className="absolute top-5 left-5 flex flex-col items-center bg-green-dark text-white p-2 rounded-md">
                <span>{parseInt(article.publishDate.day).toString()}</span>
                <span>{article.publishDate.month}</span>
              </div>
              <div className="absolute top-2/3 text-white bg-black/50 group-hover:bg-black/80 backdrop-blur-md m-2 p-2 rounded-md">
                <h2>{article.title}</h2>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestArticlesSlider;