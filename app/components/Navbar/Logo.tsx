'use client'




import { LuBird } from "react-icons/lu";

import { animateScroll as scroll } from "react-scroll";





const Logo = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return ( 
    <div className="flex flex-row items-center gap-2 cursor-pointer 

    
    
    "
    onClick={toggleHome}>
        <LuBird className="text-4xl text-blue-500 "/>
        <div className="text-2xl font-bold text-blue-500 
        
        hidden md:block

        
        
        ">
            bird
        </div>
    </div>
    
    );
}
 
export default Logo;