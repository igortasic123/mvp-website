'use client'

import Image from "next/image";

import Logo from "./Logo";
import NavbarOptions from "./NavbarOptions";
import NavbarButtons from "./NavbarButtons";

import { animateScroll as scroll } from "react-scroll";




const Navbar = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return ( 
    <div className="
    w-full
    px-10
    py-20
    flex
    items-center
    justify-between
    md:justify-evenly

    ">
        
        <Logo   />
        <NavbarOptions />
        <NavbarButtons />
        </div>

    
    );
}
 
export default Navbar;