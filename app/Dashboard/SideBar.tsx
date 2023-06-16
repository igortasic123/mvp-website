import { LuBird } from "react-icons/lu";

import Link from "next/link";

import { BiCustomize } from "react-icons/bi";

import { BsGear } from "react-icons/bs";

const SideBar = () => {
  return (
    <div
      className="
    w-1/6 
    h-screen
    border-r-[1px]


 "
    >
      <div className="flex flex-col items-center p-10">
        <Link href="#">
          <LuBird className="text-5xl text-blue-500" />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BiCustomize className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Overview</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BiCustomize className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Overview</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BiCustomize className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Overview</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BiCustomize className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Overview</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BiCustomize className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Overview</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 hover:bg-blue-100 p-5">
        <div className="flex flex-row items-center gap-5">
          <BiCustomize className="text-3xl text-gray-500" />

          <div>
            <Link href="/Dashboard">
              <p className="text-gray-500">Overview</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
