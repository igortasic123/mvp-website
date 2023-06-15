"use client";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

import Link from "next/link";





const NavbarButtons = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  const closeMobileMenu = () => setclick(false);

  return (
    <div className="flex flex-row gap-4 ">


        <AiOutlineMenu
          onClick={handleClick}
          className="text-3xl text-gray-800 cursor-pointer sm:hidden"
        />

        {click && 
        (
          <div
          className="flex flex-col  sm:hidden bg-gray-100 top-0 left-0 right-10  absolute
          h-screen
          w-screen
          z-50
          
         
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


            <div className="
            justify-center
            flex flex-col
            gap-10
            w-full
            h-full
            items-center
            ">
            <Link href="#">
              <ul
                onClick={closeMobileMenu}
                className="cursor-pointer text-gray-800 font-semibold  duration-300  text-lg"
              >
                Home
              </ul>
            </Link>
            <Link href="/Features">
              <ul
                onClick={closeMobileMenu}
                className="cursor-pointer text-gray-800 font-semibold transition duration-300  text-lg"
              >
                Features
              </ul>
            </Link>
            <Link href="/Pricing">
              <ul
                onClick={closeMobileMenu}
                className="cursor-pointer text-gray-800 font-semibold transition duration-300  text-lg"
              >
                Pricing
              </ul>
            </Link>
            <Link href="/Contact">
              <ul
                onClick={closeMobileMenu}
                className="cursor-pointer text-gray-800 font-semibold transition duration-300  text-lg"
              >
                Contact
              </ul>
            </Link>

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
