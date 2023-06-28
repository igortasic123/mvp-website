"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { slideUp, slideIn, slideDown } from "@/app/utils/framermotion";

import { InView } from "react-intersection-observer";

const SecondSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
      className="
    w-full
    flex-col
    p-10
    
    
    "
    >
      <motion.div
        variants={slideDown("ease", 0, 1.0)}
        initial="hidden"
        animate="show"
        exit="exit"
        whileInView="show"
        viewport={{ once: true }}
        className="
        flex 
        flex-col 
        items-center
        text-5xl
      font-extrabold
      text-gray-800
      "
      >
        Features
      </motion.div>
      <motion.div
        variants={slideUp("ease", 0, 1.0)}
        initial="hidden"
        animate="show"
        exit="exit"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl
      font-extrabold
      text-gray-800
        text-center
        p-10
          "
      >
        Capture more sales with powerful features.
      </motion.div>
      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref }) => (
          <div
            className="
          flex 
          flex-col 
          items-center
          md:flex-row    
          md:justify-evenly
          gap-10
          p-10
  
          
          "
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 2.0 }}
              className="flex flex-1
              
              flex-col "
            >
              <Image
                src="/images/marketplace.svg"
                alt="images"
                width={80}
                height={80}
                className="self-center"
              />
              <div className="flex flex-col ">
                <div className="text-2xl font-semibold self-center pt-10">
                  Connect
                </div>
                <div className="text-lg">
                  <div className="text-center">
                    Extend your reach to new customers and markets with our
                    integrated marketplace.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 2.0, delay: 1.0 }}
              className="flex flex-1
              
              flex-col "
            >
              <Image
                src="/images/customization.svg"
                alt="images"
                width={80}
                height={80}
                className="self-center"
              />
              <div className="flex flex-col">
                <div className="text-2xl font-semibold  self-center pt-10 b ">
                  Customize
                </div>
                <div className="text-lg">
                  <div className="text-center">
                    Customize your menu and ordering options. Monitor your
                    orders and earnings in real time.
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 2.0, delay: 1.5 }}
              className="flex flex-col flex-1


          "
            >
              <Image
                src="/images/fast.svg"
                alt="images"
                width={80}
                height={80}
                className="self-center"
              />
              <div className="flex flex-col">
                <div className="text-2xl font-semibold self-center pt-10">
                  Analyze
                </div>
                <div className="text-lg ">
                  <div className="text-center">
                    Analyze your sales and customer data to improve your
                    business.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </InView>

      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref }) => (
          <div
            className="
          flex 
          flex-col 
          items-center
    
      
          align-center
          md:flex-row    
          md:justify-evenly
          gap-10
          p-10
 
  
          
          "
          >
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 2.0 }}
              className="
                          
           


              
           "
            >
              <Image
                src="/images/featureimage.png"
                alt="images"
                width={300}
                height={300}
              />
            </motion.div>

            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 2.0, delay: 1.0 }}
              className="flex 
              
              flex-row "
            >
              <div className=" flex-col text-center justify-center ">
                <InView triggerOnce={true} threshold={0.5}>
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 0 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
                    }
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 2.0, delay: 1.5 }}
                    className="text-lg p-10 flex flex-row items-center gap-5"
                  >
                    <Image
                      src="/images/store.svg"
                      alt="features"
                      width={50}
                      height={50}
                    />
                    <div>
                      Create your own online store and start selling your
                      products and services.
                    </div>
                  </motion.div>
                </InView>
              
                <InView triggerOnce={true} threshold={0.5}>
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 0 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
                    }
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 2.0, delay: 2.0 }}
                    className="text-lg p-10 flex flex-row items-center gap-5"
                  >
                    <Image
                      src="/images/customize.svg"
                      alt="features"
                      width={50}
                      height={50}
                    />
                    <div className="text-center ">
                      Get your own custom domain name and website.
                    </div>
                  </motion.div>
                </InView>
                <InView triggerOnce={true} threshold={0.5}>
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 0 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
                    }
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 2.0, delay: 2.5 }}
                    className="text-lg p-10 flex flex-row items-center gap-5"
                  >
                    <Image
                      src="/images/ims.svg"
                      alt="features"
                      width={50}
                      height={50}
                    />
                    <div className="text-center ">
                      Inventory management and order fulfillment made easy.
                    </div>
                  </motion.div>
                </InView>
                <InView triggerOnce={true} threshold={0.5}>
                  <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 0 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }
                    }
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 2.0, delay: 3.0 }}
                    className="text-lg p-10 flex flex-row items-center gap-5"
                  >
                    <Image
                      src="/images/customersupport.svg"
                      alt="features"
                      width={50}
                      height={50}
                    />
                    <div className="text-center ">
                      Get 24/7 support from our team to help you with any issues
                      you might have.
                    </div>
                  </motion.div>
                </InView>
              </div>
            </motion.div>
          </div>
        )}
      </InView>
    </motion.div>
  );
};

export default SecondSection;
