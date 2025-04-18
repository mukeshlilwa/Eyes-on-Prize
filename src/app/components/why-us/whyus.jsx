import React from "react";
import Image from "next/image";

const imagePaths = [
  {
    src: "/images/targeting.svg",
    title: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet, consect adipiscing elit. In porta velit vel metu ultricies venenatis. Fusce et bibendu sapien. Aliquam erat volutpat. Maece mi mauris, volutpat in elit nec, varius ultricies erat. Donec vestibulum mi eget sagittis sollicitudin. Vestibulum ante ipsum primis in faucibus.",
  },
  {
    src: "/images/card2.svg",
    title: "Speed",
    description: "Fast and reliable service.",
  },
  {
    src: "/images/card1.svg",
    title: "Support",
    description: "We provide 24/7 support.",
  },
  {
    src: "/images/light-bulb.svg",
    title: "Our Vision",
    description: "Lorem ipsum dolor sit amet, consect adipiscing elit. In porta velit vel metu ultricies venenatis. Fusce et bibendu sapien. Aliquam erat volutpat. Maece mi mauris, volutpat in elit nec, varius ultricies erat. Donec vestibulum mi eget sagittis sollicitudin. Vestibulum ante ipsum primis in faucibus.",
  },
];

const WhyUs = () => {
  return (
    <div className="bg-[#0E0E0E] text-white px-6 md:px-12 lg:py-10">
      <div className="flex flex-col md:flex-row gap-20">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h3
            className="text-xl sm:text-2xl font-semibold uppercase text-black"
            style={{ WebkitTextStroke: "1px white" }}
          >
            WHY CHOOSE US
          </h3>
          <h1 className="lg:text-[2.5rem] text-[1.5rem] font-bold mt-4 uppercase">
            Lorem ipsum dolor sit amet, consect adipiscing elit.
          </h1>
          <p className="text-[1rem] mt-3 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam
            quis massa velit. Nulla id efficitur dui. Etiam id lacinia dui, id
            porttitor nisl. Etiam vel ante vitae tortor pulvinar vulputate.
            Etiam vitae tellus ac nunc sollicitudin laoreet.
          </p>

          {/* Progress Bars */}
          <div className="mt-6">
            {/* Progress Items */}
            {[
              { title: "Customer Satisfaction", percent: 90 },
              { title: "Timely Delivery", percent: 85 },
            ].map((item, index) => (
              <div className="mb-4" key={index}>
                <div className="flex justify-between mb-1">
                  <p className="text-[20px] font-bold uppercase">
                    {item.title}
                  </p>
                </div>

                <div className="w-full bg-white h-[24px] rounded-full relative">
                  <div
                    className="bg-purple-600 h-[24px] rounded-full flex items-center justify-end px-2"
                    style={{ width: `${item.percent}%` }}
                  >
                    <span className="text-white text-sm font-medium">
                      {item.percent}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-[#7100BB] text-white uppercase font-semibold rounded-full cursor-pointer hover:bg-[#7111CC] transition duration-300">
            Book Now
          </button>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {imagePaths.map((item, index) => (
            <div
              key={index}
              className={`bg-[#7100BB] rounded-xl overflow-hidden shadow-md relative`}
            >
              {/* For the 1st and 4th card, display the small image with white background */}
              {index === 0 || index === 3 ? (
                <div className="absolute top-3 left-3 bg-white  rounded-lg z-10">
                  <Image
                    src={item.src}
                    alt={`Card ${index + 1}`}
                    width={60} // Smaller image size
                    height={60} // Smaller image size
                    className="object-contain"
                  />
                </div>
              ) : null}

              {/* Main Image */}
              <Image
                src={item.src}
                alt={`Card ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />

              {/* For the 1st and 4th card, display the h1 and p tags */}
              {index === 0 || index === 3 ? (
                <div className="absolute bottom-0 left-0 p-4 text-white bg-[#7100BB] w-full">
                  <h1 className="text-[1.5rem] font-extrabold uppercase">{item.title}</h1>
                  <p className="text-[12px]">{item.description}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
