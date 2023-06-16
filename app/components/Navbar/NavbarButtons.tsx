"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { animateScroll as scroll } from "react-scroll";

import { useState } from "react";

import Link from "next/link";

const NavbarButtons = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  const closeMobileMenu = () => setclick(false);

  const scrollToHome = () => {
    closeMobileMenu();
    scroll.scrollTo(150);
  };

  const scrollToFeatures = () => {
    closeMobileMenu();
    scroll.scrollTo(1200);
  };

  const scrollToPricing = () => {
    closeMobileMenu();
    scroll.scrollTo(3800);
  };

  const scrollToContact = () => {
    closeMobileMenu();
    scroll.scrollTo(5600);
  };

  return (
    <div className="flex flex-row gap-4 ">
      <AiOutlineMenu
        onClick={handleClick}
        className="text-3xl text-gray-800 cursor-pointer sm:hidden"
      />

      {click && (
        <div
          className="flex 
          flex-col  
          sm:hidden
          bg-white
          opacity-100
         top-0 
           left-0 
           right-10  
           absolute
          w-screen
          z-50
          scrollbar-hide
          overflow
          disable-scrollbars
          h-screen
          


         
           "
        >
          <AiOutlineClose
            onClick={handleClick}
            className="text-3xl
              text-gray-800
              cursor-pointer
              justify-end
              self-end
              mr-5
              mt-10
  


              
              "
          />

          <div
            className="
            justify-center
            flex flex-col
            gap-10
            w-full
            h-full
            items-center
            "
          >
            <div onClick={scrollToHome}>
              <ul
                onClick={closeMobileMenu}
                className="cursor-pointer text-gray-800 font-semibold  duration-300  text-lg"
              >
                Home
              </ul>
            </div>
            <div>
              <ul
                onClick={scrollToFeatures}
                className="cursor-pointer text-gray-800 font-semibold transition duration-300  text-lg"
              >
                Features
              </ul>
            </div>
            <div>
              <ul
                onClick={scrollToPricing}
                className="cursor-pointer text-gray-800 font-semibold transition duration-300  text-lg"
              >
                Pricing
              </ul>
            </div>
            <div>
              <ul
                onClick={scrollToContact}
                className="cursor-pointer text-gray-800 font-semibold transition duration-300  text-lg"
              >
                Contact
              </ul>
            </div>

            <Link href="/Login">
              <ul
                onClick={closeMobileMenu}
                className="cursor-pointer text-gray-800 font-semibold transition duration-300  text-lg"
              >
                Login
              </ul>
            </Link>

            <Link href="/SignUp">
              <ul
                onClick={closeMobileMenu}
                className="cursor-pointer text-gray-800 font-semibold transition duration-300  text-lg"
              >
                Register
              </ul>
            </Link>
          </div>
        </div>
      )}

      <div className="sm:block hidden flex-row ">
        <Link
          className="
          cursor-pointer
      py-2 px-4 text-gray-800 font-semibold transition duration-300  text-lg"
          href="/Login"
        >
          Login
        </Link>
      </div>
      <div className="sm:block hidden ">
        <Link
          href="/Demo"
          className="
        cursor-pointer
        py-2 
        px-4
         text-gray-800
         font-semibold 
         rounded-lg 
         border-[2px]
        border-gray-500  
        text-lg
        duration-300"
        >
          Book Demo
        </Link>
      </div>
    </div>
  );
};

export default NavbarButtons;
