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
    w-1/6 
    h-screen
    border-r-[1px]
    border-gray-300
    

 "
    >
      <div className="flex flex-col items-center p-10">
        <Link href="#">
          <LuBird className="text-5xl text-blue-500" />
        </Link>
      </div>

      <div className="flex flex-col gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BiCustomize className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Overview</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BsClipboardCheck className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Orders</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <LuCalendarDays className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Calendar</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <AiOutlineBarChart className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Analytics</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <RiTeamLine className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Users</p>
            </Link>
          </div>
        </div>
      </div>


      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BsCodeSlash className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Code</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BsGear className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Settings</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-5  p-5 absolute bottom-0  ">
        <div className="flex flex-row items-center gap-5">
          <BiLogOut className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Logout</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
