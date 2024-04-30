import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaPinterest, FaTelegram, FaGooglePlus } from "react-icons/fa";

const Footer = () => {
  return (
  <div className="bg-[#17140c] flex flex-col">

    
    <div className="flex max-w-[80%] flex-col justify-center gap-[25px] mx-auto text-white py-[30px py-[50px]">
    <div className='flex jutify-center justify-center gap-[30px]'>
      <FaFacebook className='text-[#73d847] text-[30px]'/>
      <FaPinterest className='text-[#73d847] text-[30px]'/>
      <FaTelegram className='text-[#73d847] text-[30px]'/>
      <FaGooglePlus className='text-[#73d847] text-[30px]'/>
      </div>
      <div className='flex gap-[50px] text-[17px] sm:flex sm:flex-col sm:gap-[20px] sm:items-center lg:flex-row lg:gap-[50px]'>
      <Link to={"/"}><p className="hover:text-gray-300 active:scale-90 transition duration-300">Home</p></Link>
      <Link to={"/products"}><p className="hover:text-gray-300 active:scale-90 transition duration-300">Products</p></Link>
      <Link to={"/contact"}><p className="hover:text-gray-300 active:scale-90 transition duration-300">Contact</p></Link>
      <Link to={"/about"}><p className="hover:text-gray-300 active:scale-90 transition duration-300">About</p></Link>
      <Link to={"/settings"}><p className="hover:text-gray-300 active:scale-90 transition duration-300">Settings</p></Link>
      </div>
    </div>

    <div className='bg-[#47a51f] text-white py-[13px] flex flex-col text-center justify-center gap-[7px]'>
      <div>
      <p className='font-semibold text-[18px]'>EXAMINATION ACCOMPLISHED BY THE STUDENT OF FRONT - 826</p>
      <p className='text-[17px]'>Azamat Shomakhsudov</p>
      </div>
    </div>
  </div>
  )
}

export default Footer
