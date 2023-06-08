'use client'

import Image from "next/image";

import { GiWaveSurfer } from "react-icons/gi";
import Logo from "./Logo";
import NavbarOptions from "./NavbarOptions";
import NavbarLogin from "./NavbarLogin";


const Navbar = () => {
    return ( 
    <div className="
    p-20    
    flex
    justify-between
    bg-gradient-to-r
    from-blue-300
    to-blue-500
    text-white
    text-lg
    font-semibold
    sticky
    w-full
    z-10

    
    ">
        <Logo />
        <NavbarOptions />
        <NavbarLogin />

    </div> 
    
    );
}
 
export default Navbar;