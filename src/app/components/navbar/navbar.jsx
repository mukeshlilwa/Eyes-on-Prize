"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const NavigationBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 300);
    setDropdownTimeout(timeout);
  };

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0E0E0E] bg-opacity-80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/Logo.svg" alt="Logo" width={80} height={70} />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div
          className="hidden md:flex gap-6 text-white text-sm uppercase"
          id="bebas-font"
        >
          <Link href="#/" className="text-[1rem]">Home</Link>
          <Link href="#about" className="text-[1rem]">About Us</Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 focus:outline-none uppercase text-[1rem] cursor-pointer">
              SERVICES <FiChevronDown size={14} />
            </button>
            {activeDropdown === "services" && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                <Link href="" className="block px-4 py-2 hover:bg-gray-100 uppercase text-[1]">Web Design</Link>
                <Link href="/services/seo" className="block px-4 py-2 hover:bg-gray-100 uppercase text-[1rem]">SEO</Link>
                <Link href="/services/branding" className="block px-4 py-2 hover:bg-gray-100 uppercase text-[1rem]">Branding</Link>
              </div>
            )}
          </div>

          {/* Service Areas Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("areas")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 focus:outline-none uppercase text-[1rem] cursor-pointer">
              SERVICE AREAS <FiChevronDown size={14} />
            </button>
            {activeDropdown === "areas" && (
              <div className="absolute left-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg z-50">
                <Link href="/areas/new-york" className="block px-4 py-2 hover:bg-gray-100 uppercase text-[1]">New York</Link>
                <Link href="/areas/los-angeles" className="block px-4 py-2 hover:bg-gray-100 uppercase text-[1]">Los Angeles</Link>
                <Link href="/areas/chicago" className="block px-4 py-2 hover:bg-gray-100 uppercase text-[1]">Chicago</Link>
              </div>
            )}
          </div>

          <Link href="/plans" className="text-[1]">Plans</Link>
          <Link href="/gallery" className="text-[1rem]">Gallery</Link>
          <Link href="/blogs" className="text-[1rem]">Blogs</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4" id="bebas-font">
          <button className="bg-transparent text-white text-[1rem] border-2 rounded-3xl px-4 py-2 text-sm uppercase hover:bg-[#7100BBBF] cursor-pointer">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Book Now</span>
          </button>
          <button className="bg-transparent text-white text-[1rem] border-2 rounded-3xl px-4 py-2 text-sm uppercase hover:bg-[#7100BBBF] cursor-pointer">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Call Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white text-2xl"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-6 py-4 text-white text-sm uppercase" id="bebas-font">
          <Link href="/" onClick={closeMobileMenu} className="block w-full py-2 border-b border-white/20 text-[1.125rem]">Home</Link>
          <Link href="/about" onClick={closeMobileMenu} className="block w-full py-2 border-b border-white/20 text-[1.125rem]">About Us</Link>

          {/* Mobile Dropdowns */}
          <button
            onClick={() => toggleDropdown("services")}
            className="w-full text-left py-2 border-b border-white/20 flex justify-between items-center text-[1.125rem]"
          >
            SERVICES <FiChevronDown />
          </button>
          {activeDropdown === "services" && (
            <div className="pl-4 text-white">
              <Link href="/services/web-design" onClick={closeMobileMenu} className="block py-2 uppercase text-[1.125rem]">Web Design</Link>
              <Link href="/services/seo" onClick={closeMobileMenu} className="block py-2 uppercase text-[1.125rem]">SEO</Link>
              <Link href="/services/branding" onClick={closeMobileMenu} className="block py-2 uppercase text-[1.125rem]">Branding</Link>
            </div>
          )}

          <button
            onClick={() => toggleDropdown("areas")}
            className="w-full text-left py-2 border-b border-white/20 flex justify-between items-center text-[1.125rem]"
          >
            SERVICE AREAS <FiChevronDown />
          </button>
          {activeDropdown === "areas" && (
            <div className="pl-4 text-white">
              <Link href="/areas/new-york" onClick={closeMobileMenu} className="block py-2 uppercase text-[1.125rem]">New York</Link>
              <Link href="/areas/los-angeles" onClick={closeMobileMenu} className="block py-2 uppercase text-[1.125rem]">Los Angeles</Link>
              <Link href="/areas/chicago" onClick={closeMobileMenu} className="block py-2 uppercase text-[1.125rem]">Chicago</Link>
            </div>
          )}

          <Link href="/plans" onClick={closeMobileMenu} className="block w-full py-2 border-b border-white/20 text-[1.125rem]">Plans</Link>
          <Link href="/gallery" onClick={closeMobileMenu} className="block w-full py-2 border-b border-white/20 text-[1.125rem]">Gallery</Link>
          <Link href="/blogs" onClick={closeMobileMenu} className="block w-full py-2 border-b border-white/20 text-[1.125rem]">Blogs</Link>

          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full border border-white text-white py-2 rounded-3xl uppercase focus:border-[#7100BBBF] focus:text-[#7100BBBF]">Book Now</button>
            <button className="w-full border border-white text-white py-2 rounded-3xl uppercase focus:border-[#7100BBBF] focus:text-[#7100BBBF]">Call Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
