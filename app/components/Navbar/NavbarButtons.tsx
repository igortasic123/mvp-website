"use client";

import { AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

import Link from "next/link";


const NavbarButtons = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div className="flex flex-row gap-4">
      <div className="sm:hidden">
        <AiOutlineMenu
          onClick={() => setMenu(!menu)}
          className="text-3xl cursor-pointer  "
        />
      </div>

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
