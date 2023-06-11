'use client'

import Image from "next/image";

import { GiWaveSurfer } from "react-icons/gi";
import Logo from "./Logo";
import NavbarOptions from "./NavbarOptions";
import NavbarLogin from "./NavbarButtons";

import { animateScroll as scroll } from "react-scroll";




const Navbar = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return ( 
    <div className="
    w-full
    p-20
    flex
    justify-between
    items-center

    
    
    ">
        
        <Logo   />
        <NavbarOptions />
        <NavbarLogin />
        </div>

    
    );
}
 
export default Navbar;