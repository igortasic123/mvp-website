'use client'

import Image from "next/image";

import Logo from "./Logo";
import NavbarOptions from "./NavbarOptions";
import NavbarButtons from "./NavbarButtons";

import { motion } from "framer-motion";

import { slideIn } from "@/app/utils/framermotion";





const Navbar = () => {


    return ( 
    <motion.div

    variants={slideIn("right", "ease", 0, true,  1.0)}
    initial="hidden"
    animate="show"
    exit="exit"
    whileInView="show"
    viewport={{once:true,}}


    className="
    w-full
    px-10
    py-20
    flex
    items-center
    justify-between
    md:justify-evenly

    ">        
        <Logo 
        />
        <NavbarOptions />
        <NavbarButtons />
        </motion.div>

    
    );
}
 
export default Navbar;