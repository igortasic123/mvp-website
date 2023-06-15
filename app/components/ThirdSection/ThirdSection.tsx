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
      px-20
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
        <div className="flex-col  md:flex md:flex-row gap-10 md:p-10 ">
        
        <div className="flex-col  border-[1px] text-lg  rounded-xl p-10 ">
            <div className="flex flex-col md:justify-between items-center text-gray-800 text-3xl  ">
        <div className=" flex-row  text-gray-800 text-2xl semibold py-5 ">
            Bird Storefront
        </div>
        <div className="text-blue-400 text-2xl font-semibold">
           2.7% + 30¢
        </div>
        </div>
        <div className= "py-10">
        Grow your business with Storefront, which helps you generate commission-free orders directly though your website.
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"
        
        size={30}
        />
        <div className="">No monthly software fees</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"
        
        size={30}/>
        <div className="">No startup fees or credit card fees</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"
                size={30}
        />
        <div className="">No contracts; cancel any time</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"
                size={30}
        />
        <div className="">Marketing to local customers in your area</div>

        </div>
        <div className="flex flex-row gap-3 p-10 items-center ">
        <FcCheckmark className="text-green-500"  
        size={30}
        
        />
        <div className="">Create commision-less walk in orders</div>
        </div>

        </div>

        <div className="flex-col  border-[1px] text-lg  rounded-xl p-10 ">
        <div className="flex flex-col md:justify-between items-center text-gray-800 text-3xl  ">
        <div className=" flex-row  text-gray-800 text-2xl semibold py-5 ">
            Bird Marketplace
        </div>
        <div className="text-orange-300 text-2xl font-semibold">
           10% + 30¢
        </div>
        </div>
        <div className= "py-10">
        Market your business to new customers with Marketplace, which helps you generate stress-free orders through our website.
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"
                size={30}
        />
        <div className="">No monthly software fees</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"
        
        size={30}/>
        <div className="">No startup fees or credit card fees</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"
        
        size={30}/>
        <div className="">No contracts; cancel any time</div>
        </div>
        <div className="flex flex-row gap-5 p-10 items-center ">
        <FcCheckmark className="text-green-500"
        
        size={30}/>
        <div className="">Marketing to local customers in your area</div>
        </div>
        </div>

 

        </div>
        </div>


  );
};

export default ThirdSection;
