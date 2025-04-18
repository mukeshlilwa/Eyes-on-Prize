"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-auto min-h-[44rem] sm:min-h-[44rem] w-full">
      {/* Background Image */}
      <Image
        src="/images/heroBackground.svg"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000E5] to-[#7100BBBF] z-10"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center px-4 sm:px-6 lg:px-8 pt-44 pb-20 lg:pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1440px] mx-auto text-white">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-4">
            <h3
              className="text-lg sm:text-xl md:text-2xl uppercase font-semibold text-black"
              style={{ WebkitTextStroke: "1px white" }}
            >
              Your Prize, Our Passion
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold uppercase leading-tight">
              Extensive Car Detailing for the Valuable Care You Deserve
            </h1>
            <p className="text-sm sm:text-base md:text-lg">
              Welcome to Eyez on the Prize Auto Spa in Charlotte, where expert
              detailing transforms your car, increasing its beauty and value
              with impressive accuracy and care.
            </p>
            <button className="mt-3 w-fit text-white border-2 px-6 py-3 rounded-full text-sm sm:text-base md:text-lg uppercase font-semibold transition cursor-pointer hover:bg-[#7100BBBF]">
              Book Now
            </button>
          </div>

          {/* Right Column */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/Image.svg"
              alt="Hero Illustration"
              width={676}
              height={389}
              className="object-contain w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
