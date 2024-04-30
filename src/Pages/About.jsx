import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link to={'#'}>
      <div className='flex w-[270px] justify-center items-center h-[80px] text-white bg-[#47a51f] rounded-2xl animate-bounce text-[30px] shadow-lg shadow-slate-700 '>
        <p className=''>About</p>
      </div>
      </Link>
    </div>
  )
};

export default About;
