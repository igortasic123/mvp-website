"use client";

import Image from "next/image";

import { animateScroll as scroll } from "react-scroll";

const FirstSection = () => {




  return (
    
      <div className=" m-auto justify-between items-center gap-10  md:flex md:w-3/4 duration-300 md:py-10

      


      ">
      <div className="   justify-center gap-10   lg-flex-row md:w-1/2
      
      ">
        <div className="flex flex-col px-20  self-center justify-around gap-10">
          <div className="text-gray-800 font-extrabold text-6xl">
            The #1 booking software for tours and activities
          </div>
          <div className="text-gray-800 font-semibold text-2xl pt-5">
            The all-in-one booking solution and business management platform
            that makes it easy to operate your tours, activities, rentals and
            attractions. Built to scale with your business, from local shops to
            enterprise operations.
          </div>
          <div className="">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            Get Started
          </button>
          </div>
          </div>
        </div>

        <div className="p-10">
          <Image
            src="/images/example-8.svg"
            alt="images"
            width={500}
            height={500}
            className=""
          />
        </div>
      </div>
  );
};

export default FirstSection;
