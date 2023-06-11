'use client'


import { TiWavesOutline} from "react-icons/ti";

import { animateScroll as scroll } from "react-scroll";





const Logo = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return ( 
    <div className="flex flex-row items-center gap-2 cursor-pointer

    
    
    "
    onClick={toggleHome}>
        <TiWavesOutline className="text-4xl text-blue-500 "/>
        <div className="text-2xl font-bold text-blue-500 sm:hidden-block">
            wave
        </div>
    </div>
    
    );
}
 
export default Logo;