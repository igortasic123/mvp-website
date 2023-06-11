"use client";

const NavbarButtons = () => {
  return (
    <div>
      <a

        className="
        cursor-pointer
        py-2 px-4 text-gray-800 font-semibold transition duration-300  text-lg"
      >
        Login
      </a>
      <a

        className="
        cursor-pointer
        py-2 
        px-4
         text-gray-800
         font-semibold 
         rounded-lg 
         border-[2px]
        border-gray-500  
        text-lg
        duration-300"
      >
        Sign Up
      </a>
    </div>
  );
};

export default NavbarButtons;
