"use client";

import { animateScroll as scroll } from "react-scroll";


const NavbarOptions = () => {

    



  const scrollToHome = () => {
    scroll.scrollTo(150);
  };

  const scrollToFeatures = () => {
    scroll.scrollTo(750);
  };

  const scrollToPricing = () => {
    scroll.scrollTo(1900);
  };

  const scrollToContact = () => {
    scroll.scrollTo(3000);
  };

  return (
    <div className=" self-center  flex-row gap-4 items-center hidden md:block ">
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
