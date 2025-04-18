import React from 'react';
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-12 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
        {/* Col 1 - Logo and Description */}
        <div className="lg:col-span-3">
          <img src="/images/logo.svg" alt="Logo" className="w-24 mb-4" />
          <p className="text-sm font-semibold">
            Discover the magic of our services by booking an appointment. Then, get ready for a sparkling car wash experience.
          </p>
        </div>

        {/* Col 2 - Useful Links */}
        <div className="lg:col-span-2">
          <h4 className="font-semibold mb-3 uppercase">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Col 3 - Service Areas */}
        <div className="lg:col-span-2">
          <h4 className="font-semibold mb-3 uppercase">Service Areas</h4>
          <ul className="space-y-2 text-sm">
            <li>USA</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>UK</li>
            <li>UAE</li>
          </ul>
        </div>

        {/* Col 4 - Our Services */}
        <div className="lg:col-span-2">
          <h4 className="font-semibold mb-3 uppercase">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web Design</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>SEO & Marketing</li>
            <li>Brand Strategy</li>
          </ul>
        </div>

        {/* Col 5 - Get In Touch */}
        <div className="lg:col-span-3">
          <h4 className="font-semibold mb-3 uppercase">Get In Touch</h4>
          <p className="text-sm mb-1">Email: contact@example.com</p>
          <p className="text-sm mb-4">Phone: +123 456 7890</p>

          <form className="w-full relative">
            {/* Email Icon */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
              <MdEmail className="text-xl" />
            </div>

            {/* Input + Button */}
            <div className="bg-white rounded-full flex items-center w-full pl-12 pr-2 py-1 mt-2 sm:mt-0">
              <input
                type="email"
                placeholder="Your email"
                className="w-full outline-none text-sm text-black bg-transparent placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="ml-2 bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-900 transition whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
