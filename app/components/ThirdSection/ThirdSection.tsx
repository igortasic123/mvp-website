"use client";

import { FcCheckmark } from "react-icons/fc";

const ThirdSection = () => {
  return (
    <div
      className="
      flex 
      flex-col
      justify-center
      items-center
      "
    >
    <div className="text-5xl
      font-extrabold
      text-gray-800
        text-center
      
      ">
        Pricing
        <div 
        className="flex
        justify-center
        items-center
        text-4xl
        semibold
        p-10

        ">
            Our pricing is simple and transparent. No hidden fees.
        </div>

        </div>
        <div className="flex gap-10 w-3/4 pb-10 ">
        <div className="flex-col border-[1px] text-lg w-1/2  rounded-xl p-10 ">
            <div className="flex flex-row justify-between text-gray-800 text-3xl  ">
        <div className="flex flex-col  text-gray-800 text-3xl semibold py-5 ">
            Wave Storefront
        </div>
        <div className="flex flex-col  text-xl  items-center justify-center text-orange-300 ">
            5% + $0.50 per order
        </div>
        </div>
        <div className= "py-10">
        Grow your business with Storefront, which helps you generate commission-free orders directly though your website.
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">No monthly software fees</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">No startup fees or credit card fees</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">No contracts; cancel any time</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">Marketing to local customers in your area</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">Create commision-less walk in orders</div>
        </div>

        </div>

        <div className="flex-col border-[1px] text-lg  rounded-xl p-10 w-1/2 ">
            <div className="flex flex-row justify-between text-gray-800 text-3xl  ">
        <div className="flex flex-col  text-gray-800 text-3xl semibold py-5 ">
            Wave Marketplace
        </div>
        <div className="flex flex-col  text-xl  items-center justify-center text-orange-300 ">
            10% + $0.50 per order
        </div>
        </div>
        <div className= "py-10">
        Market your business to new customers with Marketplace, which helps you generate stress-free orders through our website.
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">No monthly software fees</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">No startup fees or credit card fees</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">No contracts; cancel any time</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"/>
        <div className="">Marketing to local customers in your area</div>
        </div>
        </div>

 

        </div>
        </div>


  );
};

export default ThirdSection;
