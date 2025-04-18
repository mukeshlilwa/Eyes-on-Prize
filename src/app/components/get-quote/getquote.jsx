'use client';

import React from "react";

const GetQuote = () => {
  return (
    <div className="bg-[#0E0E0E] w-full px-4 sm:px-6 md:px-12 py-10 lg:py-20">
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white rounded-xl p-6 sm:p-8 md:p-10 lg:p-12"
        style={{
          backgroundImage: `linear-gradient(to right, #0F0F0FBF, #75757500), url('/images/getquote.svg')`,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-lg sm:text-xl md:text-2xl uppercase font-semibold text-black"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Get a QUOTE
          </h3>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase leading-snug mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="text-sm sm:text-base md:text-lg mt-3 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam
            quis massa velit. Nulla id efficitur dui. Etiam id lacinia dui, id
            porttitor nisl.
          </p>
          <button className="mt-5 border-2 border-white text-white px-6 py-2 rounded-full text-sm sm:text-base uppercase font-semibold transition duration-300 hover:bg-white hover:text-black">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
