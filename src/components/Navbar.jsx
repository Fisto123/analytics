import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex ">
        <li className="p-4 hover:text-pink-200">HOME</li>
        <li className="p-4 hover:text-pink-200">COMPANY</li>
        <li className="p-4 hover:text-pink-200">RESOURCES</li>
        <li className="p-4 hover:text-pink-200">ABOUT</li>
        <li className="p-4">CONTACT</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* mobile view */}
      <div
        className={
          nav
            ? `fixed left-0 top-0 w-[50%] border-r border-r-gray-900 h-full bg-[#000300]`
            : `fixed left-[-100%] ease-in-out duration-500`
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="pt-12 uppercase md:hidden  ">
          <li className="p-4 border-b border-gray-600">HOME</li>
          <li className="p-4 border-b border-gray-600">COMPANY</li>
          <li className="p-4 border-b border-gray-600">RESOURCES</li>
          <li className="p-4 border-b border-gray-600">ABOUT</li>
          <li className="p-4 ">CONTACT</li>
        </ul>
      </div>

      {/* mobile view */}
    </div>
  );
};

export default Navbar;
