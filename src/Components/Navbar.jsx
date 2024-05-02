import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#17140c] flex items-center py-[10px]">
      <div className="w-[85%] mx-auto flex items-center justify-between">
      <div className="text-white bg-[#47a51f] w-[70px] h-[70px] rounded-full flex justify-center items-center">LOGO</div>
      <div className="flex w-[80%] text-white justify-center items-center mx-auto gap-[10%]">
      <Link to={"/"}><p className="hover:text-gray-300 active:scale-90 transition duration-300">Home</p></Link>
      <Link to={"/products"}><p className="hover:text-gray-300 active:scale-90 transition duration-300">Products</p></Link>
      <Link to={"/about"}><p className="hover:text-gray-300 active:scale-90 transition duration-300">About</p></Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
