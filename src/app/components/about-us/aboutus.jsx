import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className= "bg-[#0e0e0e] text-white lg:py-30 py-15 relative" id="about">
      <div className="max-w-[1200px] mx-auto px-2 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column - 4 cols (Image) */}

        <div className="md:col-span-4 px-4 md:px-6 lg:px-10 relative">
          {/* White background box behind image */}
          <div className="absolute bottom-4 right-5 w-[80%] h-[100%] bg-[#1C1B20] rounded-md z-0 top-5"></div>

          {/* Image on top of background box */}
          <Image
            src="/images/aboutImage.svg"
            alt="About Us"
            width={400}
            height={400}
            className="w-full h-auto rounded-md object-cover relative z-10"
          />
        </div>

        {/* Right Column - 8 cols (Text with background image) */}
        <div className="md:col-span-8 px-4 md:px-6 lg:px-10 relative">
          {/* Background Image */}
          <Image
            src="/images/pattren.svg"
            alt="BG"
            width={130}
            height={130}
            className="absolute -top-32 right-10 z-0 object-contain rotate-90"
          />

          {/* Foreground content */}
          <div className="relative z-10">
            <h3
              className="lg:text-[1.5rem] text-xl uppercase font-semibold text-black"
              style={{ WebkitTextStroke: "1px white" }}
            >
              About Us
            </h3>
            <h1 className="lg:text-[2rem] text-[1.5rem] font-semibold uppercase leading-tight mt-1">
              Discover How We Bring Outstanding Excellence to Car Detailing!
            </h1>
            <p className="text-[1rem] font-normal text-justify mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam
              quis massa velit. Nulla id efficitur dui. Etiam id lacinia dui, id
              porttitor nisl. Etiam vel ante vitae tortor pulvinar vulputate.
              Etiam vitae tellus ac nunc sollicitudin laoreet. Proin consequat
              ac purus eu sagittis. Cras et elit tincidunt, malesuada metus sit
              amet, volutpat quam. Nam scelerisque scelerisque augue, eu semper
              enim faucibus non. Fusce at elementum nibh.
            </p>
            <button className="mt-4 w-fit bg-[#7100BB] text-white px-6 py-2 rounded-full text-[1rem] uppercase font-semibold transition cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
