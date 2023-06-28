"use client";


import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { motion } from "framer-motion";

import { slideUp, slideIn, slideDown } from "@/app/utils/framermotion";

import { InView } from "react-intersection-observer";



const ThirdSection = () => {
  return (
    <div
      className="
      flex 
      flex-col
      justify-center
      items-center
      px-10
      "
    >
      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref, entry }) => (

    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 0 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
    exit={{ opacity: 0, y: 0 }}
    transition={{ duration: 2.0 }}

    className="text-5xl
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

        </motion.div>
        )}
        </InView>
        <div className="flex-col gap-10 md:flex md:flex-row  md:p-10 ">
        
        <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref, entry }) => (

        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 2.0 }}

        
        className="flex-col border-[1px] text-lg  rounded-xl p-10 mb-10  md:mb-0">
            <div className="flex flex-col md:justify-between items-center text-gray-800 text-3xl  ">
        <div className=" flex-row  text-gray-800 text-2xl semibold py-10 ">
            Bird Storefront (1 -5 locations)
        </div>
        <div className="text-blue-400 text-2xl font-semibold">
           6% + $0.30 per order
        </div>
        </div>
        <div className= "py-10">
        Grow your business with Storefront, our online booking solution.
        </div>
        <div className="flex flex-row gap-5 p-5 md:p-10 items-center  ">
          <div className="
          text-green-500
          ">
        <IoShieldCheckmarkOutline className="text-green-500"
        
        size={30}
        />
        </div>
        <div>No monthly software fees </div>
        </div>
        <div className="flex flex-row gap-5 p-5 md:p-10 items-center ">
          <div className="
          text-green-500
          ">
        <IoShieldCheckmarkOutline className="text-green-500"
        
        size={30}
        />
        </div>
        <div >No Contracts; Cancel anytime </div>
        </div>
        <div className="flex flex-row gap-5 p-5 md:p-10 items-center ">
          <div className="
          text-green-500
          ">
        <IoShieldCheckmarkOutline className="text-green-500"
        
        size={30}
        />
        </div>
        <div>
          Support via email and chat
           </div>
        </div>
            <div className="flex flex-row gap-5 p-5 md:p-10 items-center ">
          <div className="
          text-green-500
          ">
        <IoShieldCheckmarkOutline className="text-green-500"
        
        size={30}
        />
        </div>
        <div>
          Unlimited products and orders
           </div>
        </div>
        </motion.div>
        )}
        </InView>


        <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref,  }) => (

        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 2.0, delay: 1.0 }}

        
        className="flex-col border-[1px] text-lg  rounded-xl p-10 mb-10  md:mb-0">
            <div className="flex flex-col md:justify-between items-center text-gray-800 text-3xl  ">
        <div className=" flex-row  text-gray-800 text-2xl semibold py-10 ">
            Bird Storefront (1 -5 locations)
        </div>
        <div className="text-blue-400 text-2xl font-semibold">
           6% + $0.30 per order
        </div>
        </div>
        <div className= "py-10">
        Grow your business with Storefront, our online booking solution.
        </div>
        <div className="flex flex-row gap-5 p-5 md:p-10 items-center  ">
          <div className="
          text-green-500
          ">
        <IoShieldCheckmarkOutline className="text-green-500"
        
        size={30}
        />
        </div>
        <div>No monthly software fees </div>
        </div>
        <div className="flex flex-row gap-5 p-5 md:p-10 items-center ">
          <div className="
          text-green-500
          ">
        <IoShieldCheckmarkOutline className="text-green-500"
        
        size={30}
        />
        </div>
        <div >No Contracts; Cancel anytime </div>
        </div>
        <div className="flex flex-row gap-5 p-5 md:p-10 items-center ">
          <div className="
          text-green-500
          ">
        <IoShieldCheckmarkOutline className="text-green-500"
        
        size={30}
        />
        </div>
        <div>
          Support via email and chat
           </div>
        </div>
            <div className="flex flex-row gap-5 p-5 md:p-10 items-center ">
          <div className="
          text-green-500
          ">
        <IoShieldCheckmarkOutline className="text-green-500"
        
        size={30}
        />
        </div>
        <div>
          Unlimited products and orders
           </div>
        </div>
        </motion.div>
        )}
        </InView>
 
 
        </div>
        </div>
        


  );
};

export default ThirdSection;
