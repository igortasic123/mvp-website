import { LuBird } from "react-icons/lu";

import Link from "next/link";

import { BiCustomize, BiLogOut } from "react-icons/bi";
import { AiOutlineBarChart, AiOutlineCalendar } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { BsClipboardCheck, BsGear, BsCodeSlash } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";


const SideBar = () => {

  return (


    <div
      className="
    w-20
    md:w-60
    h-screen
    border-r-[1px]
    border-gray-300

 "
    >
      <div className="flex flex-col items-center p-10 cursor-pointer">
        <Link href="#">
          <LuBird
            size={35}
            className="
          
          text-blue-500"
          />
        </Link>
      </div>



      <div className="flex flex-col gap-5 hover:bg-blue-100 p-5 cursor-pointer  ">
        <div className="flex flex-row items-center gap-5">
          <BiCustomize size={25} className=" text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p
                className="
              hidden
              md:block
              text-gray-500"
              >
                Overview
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5 cursor-pointer">
        <div className="flex flex-row items-center gap-5">
          <BsClipboardCheck size={25} className=" text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p
                className="text-gray-500
              
              hidden
              md:block
              "
              >
                Orders
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5  cursor-pointer">
        <div className="flex flex-row items-center gap-5">
          <LuCalendarDays size={25} className=" text-gray-500" />

          <div>
            <Link href="/Calendar">
              <p
                className="text-gray-500
                     hidden
                     md:block
              "
              >
                Calendar
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5 cursor-pointer">
        <div className="flex flex-row items-center gap-5">
          <AiOutlineBarChart size={25} className=" text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p
                className="text-gray-500
                     hidden
                     md:block
              "
              >
                Analytics
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5 cursor-pointer">
        <div className="flex flex-row items-center gap-5">
          <RiTeamLine size={25} className=" text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p
                className="text-gray-500
                     hidden
                     md:block
              "
              >
                Customers
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5 cursor-pointer">
        <div className="flex flex-row items-center gap-5">
          <BsCodeSlash size={25} className=" text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p
                className="text-gray-500
              
              hidden
              md:block
              "
              >
                Code
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5 cursor-pointer">
        <div className="flex flex-row items-center gap-5">
          <BsGear size={25} className=" text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p
                className="text-gray-500
              
              hidden
              md:block"
              >
                Settings
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5  p-5 absolute bottom-0 cursor-pointer ">
        <div className="flex flex-row items-center gap-5">
          <BiLogOut
            size={25}
            className="
           text-gray-500"
          />

          <div>
            <Link href="/Dashboard">
              <p
                className="text-gray-500
                     hidden
                     md:block
              "
              >
                Logout
              </p>
            </Link>
          </div>
        </div>

      </div>



    </div>
  );
};

export default SideBar;
