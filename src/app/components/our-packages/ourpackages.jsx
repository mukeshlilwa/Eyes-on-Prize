import React from "react";
import { FaCheck } from "react-icons/fa";

const OurPackages = () => {
  return (
    <>
      <div className="bg-[#0E0E0E] px-6 sm:px-8 md:px-12 pb-30 pt-10 lg:pb-20">
        <h3
          className="text-xl sm:text-2xl font-semibold uppercase text-black text-start"
          style={{ WebkitTextStroke: "1px white" }}
        >
          OUR PACKAGES
        </h3>

        {/* Two Column Flex for Headings */}
        <div className="flex flex-col md:flex-row gap-5 mt-6">
          {/* Left Column */}
          <div className="md:w-4/12 text-white">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Experience the Best with Our Tailored Packages!
            </h1>
          </div>

          {/* Right Column */}
          <div className="md:w-8/12 text-white mt-4 md:mt-0">
            <p className="text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              auctor est, quis commodo mi. Nulla malesuada iaculis posuere. Nam
              quis massa velit. Nulla id efficitur dui.
            </p>
          </div>
        </div>

        {/* Packages Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10">
          {[1, 2].map((pkg, i) => (
            <div
              key={i}
              className="w-full lg:w-6/12 text-white rounded-lg bg-[#7100BB] px-6 sm:px-8 py-8"
            >
              <h3 className="text-xl sm:text-2xl font-semibold">Standard Detail</h3>
              <h1 className="text-2xl sm:text-3xl font-semibold border-b border-white mt-1 pb-2">
                $150 <span className="text-sm">/ STARTING AT</span>
              </h1>

              <div className="flex flex-col sm:flex-row mt-4 gap-6">
                {/* Left Column */}
                <div className="w-full sm:w-1/2 space-y-3">
                  {[
                    "Product 1",
                    "Product 2",
                    "Product 3",
                    "Product 4",
                    "Product 5",
                    "Product 6",
                    "Product 7",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="bg-white text-[#7100BB] rounded-full p-1">
                        <FaCheck size={12} />
                      </span>
                      <p className="text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="w-full sm:w-1/2 space-y-3">
                  {[
                    "Product 8",
                    "Product 9",
                    "Product 10",
                    "Product 11",
                    "Product 12",
                    "Product 13",
                    "Product 14",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="bg-white text-[#7100BB] rounded-full p-1">
                        <FaCheck size={12} />
                      </span>
                      <p className="text-sm sm:text-base">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="pt-4 text-sm sm:text-base">
                (Price varies based on size of vehicle and pre-existing conditions)
              </p>

              <button className="uppercase w-full border border-2 rounded-full py-2 mt-4 font-semibold hover:bg-white hover:text-[#7100BB] transition">
                Yes, I want this package!
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurPackages;
