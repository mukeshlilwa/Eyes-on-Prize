'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const OurPortfolio = () => {
  const carImages = [
    "/images/card2.svg",
    "/images/card2.svg",
    "/images/card2.svg",
    "/images/card2.svg",
    "/images/card2.svg",
    "/images/card2.svg",
    "/images/card2.svg",
  ];

  return (
    <div className="bg-[#0E0E0E] px-6 sm:px-8 md:px-12 pb-30 pt-20">
      <h3
        className="text-xl sm:text-2xl font-semibold uppercase text-black text-start"
        style={{ WebkitTextStroke: "1px white" }}
      >
        OUR PORTFOLIO
      </h3>

      {/* Two Column Flex for Headings */}
      <div className="flex flex-col md:flex-row gap-5 mt-4">
        <div className="md:w-4/12 text-white">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Experience the Best with Our Tailored Packages!
          </h1>
        </div>

        <div className="md:w-8/12 text-white lg:mt-4 mt-1 md:mt-0">
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam
            quis massa velit. Nulla id efficitur dui.
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="mt-12">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {carImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`Car ${index + 1}`}
                  className="object-cover w-full h-56 md:h-72 lg:h-80"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPortfolio;
