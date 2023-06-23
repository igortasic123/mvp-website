"use client";

import Image from "next/image";

import Link from "next/link";

import { motion } from "framer-motion";

import { slideIn } from "@/app/utils/framermotion";

const FirstSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
      className=" m-auto justify-between items-center  md:flex md:w-3/4 duration-300 md:py-10


      "
    >
      <div
        className="   justify-center   lg-flex-row md:w-1/2
      
      "
      >
        <motion.div
            variants={slideIn("left", "ease", 0, true,  1.0)}
          initial="hidden"
          animate="show"
          exit="exit"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col px-10  self-center justify-around gap-10"
        >
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
            <Link href="/SignUp">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                Get Started
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
            variants={slideIn("right", "ease", 0, true,  1.0)}
        initial="hidden"
        animate="show"
        exit="exit"
        whileInView="show"
        viewport={{ once: true }}
        className="p-10"
      >
        <Image
          src="/images/example-8.svg"
          alt="images"
          width={500}
          height={500}
          className=""
        />
      </motion.div>
    </motion.div>
  );
};

export default FirstSection;
