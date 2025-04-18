import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const TestimonialsSection = () => {
  return (
    <div className="bg-[#0E0E0E] px-6 sm:px-8 md:px-12 pb-30 lg:pb-20">
      <h3
        className="text-xl sm:text-2xl font-semibold uppercase text-black text-start"
        style={{ WebkitTextStroke: '1px white' }}
      >
        Testimonials
      </h3>

      {/* Two Column Flex for Headings */}
      <div className="flex flex-col md:flex-row gap-5 mt-6">
        <div className="md:w-4/12 text-white">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Lorem ipsum dolor sit consectetur adipiscing elit.
          </h1>
        </div>
        <div className="md:w-8/12 text-white mt-4 md:mt-0">
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam
            quis massa velit. Nulla id efficitur dui.
          </p>
        </div>
      </div>

      {/* Testimonials Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-black w-full min-h-[288px] rounded-xl shadow-md text-white p-4"
          >
            {/* Top Row: Avatar, Name, Date, Google Icon */}
            <div className="flex justify-between items-start">
              <div className="flex gap-3 items-start">
                <img
                  src="/images/avatar.svg"
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">John Doe</p>
                  <p className="text-xs text-gray-400 mt-1">March 25, 2025</p>
                </div>
              </div>
              <FcGoogle className="w-5 h-5" />
            </div>

            {/* Star Rating */}
            <div className="flex items-center mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-4 h-4 text-yellow-400 mr-1"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.23 3.778h3.973c.969 0 1.371 1.24.588 1.81l-3.21 2.33 1.229 3.778c.3.921-.755 1.688-1.54 1.117L10 13.348l-3.21 2.33c-.784.57-1.838-.196-1.54-1.117l1.229-3.778-3.21-2.33c-.783-.57-.38-1.81.588-1.81h3.973l1.23-3.778z" />
                </svg>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm mt-3 break-words">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta
              velit vel metus ultricies venenatis. Fusce et bibendum sapien.
              Aliquam erat volutpat. Maecenas mi mauris, volutpat in elit nec,
              varius ultricies erat. Donec vestibulum mi eget sagittis
              sollicitudin.
            </p>

            {/* Learn More Button */}
            <button className="mt-3 text-white text-sm transition cursor-pointer hover:text-gray-200">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
