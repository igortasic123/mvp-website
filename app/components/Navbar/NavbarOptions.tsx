"use client";

import { animateScroll as scroll } from "react-scroll";

const NavbarOptions = () => {
  const scrollToHome = () => {
    scroll.scrollTo(200);
  };

  const scrollToFeatures = () => {
    scroll.scrollTo(900);
  };

  const scrollToPricing = () => {
    scroll.scrollTo(2100);
  };

  const scrollToContact = () => {
    scroll.scrollTo(3300);
  };

  return (
    <div>
      <a
        onClick={scrollToHome}
        className="py-2 px-4 text-gray-900 font-semibold text-xl transition duration-300"
      >
        Home
      </a>
      <a
        onClick={scrollToFeatures}
        className="py-2 px-4 text-gray-900 font-semibold text-xl transition duration-300"
      >
        Features
      </a>
      <a
        onClick={scrollToPricing}
        className="py-2 px-4 text-gray-900 font-semibold text-xl transition duration-300"
      >
        Pricing
      </a>
      <a
        onClick={scrollToContact}
        className="py-2 px-4 text-gray-900 font-semibold text-xl transition duration-300"
      >
        Contact
      </a>
    </div>
  );
};

export default NavbarOptions;
