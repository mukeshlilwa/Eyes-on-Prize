import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Automotive Aesthetics",
      img: "/images/pattren.svg",
      onlyImage: true, // Flag to indicate only image
    },
    {
      title: "Ceramic Coating",
      img: "/images/imgg.svg",
    },
    {
      title: "Automotive Car Wash",
      img: "/images/imgg.svg",
    },
    {
      title: "Automotive Car Wash",
      img: "/images/imgg.svg",
    },
  ];

  return (
    <div className="bg-[#0e0e0e] text-white py-6 px-6" id="services">
      {/* Heading Section */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-2">
          <h3
            className="text-xl sm:text-2xl font-semibold uppercase text-black"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Services
          </h3>
        </div>

        <div className="md:col-span-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase">
            Services We Offer
          </h2>
          <p className="text-sm sm:text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam
            quis massa velit. Nulla id efficitur dui.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] mt-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg flex flex-col relative"
          >
            {/* If onlyImage is true, render only the image */}
            {item.onlyImage ? (
              <img
                src={item.img}
                alt={item.title}
                className="w-120 h-100 pt-15 item-start"
              />
            ) : (
              <>
                {/* Top Image */}
                <div className="relative w-full h-[200px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[360px] object-fit"
                  />
                </div>

                {/* Text Content on BG.svg */}
                <div
                  className="relative -mt-8 pt-12 pb-6 px-4 text-white z-10"
                  style={{
                    backgroundImage: "url('/images/BG.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                  }}
                >
                  <h3 className="text-lg font-bold uppercase mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    in auctor est, quis commodo mi. Nulla malesuada iaculis
                    posuere.
                  </p>
                  <button className="bg-white text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-gray-200">
                    Learn More
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
