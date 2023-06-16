
import { LuBird } from "react-icons/lu";

import Link from "next/link";

const SideBar = () => {
    return ( 
    <div className="
    w-1/6 
    h-screen
    border-r-[1px]


 ">
    <div className="flex flex-col items-center p-10">
        <Link href="#">
            <LuBird
            className="text-5xl text-blue-500"
            />
        </Link>
        </div>

        <div className="flex flex-col items-center gap-5 ">
  

                </div>

    </div>
    
    
    );
}
 
export default SideBar;