import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-[#ffffff]'>tesseract.</h1>

      {/* Navigation items moved to the right */}
      <ul className='flex ml-auto'>
        <li className='p-4 font-bold text-[#fafafa] text-xl'>TessLearn</li>
        <li className='p-4 font-bold text-[#ffffff] text-xl'>TessLab</li>
        <li className='p-4 font-bold text-[#ffffff] text-xl'>TessTrade</li>
        <li className='p-4 font-bold text-[#ffffff] text-xl'>TessDev</li>
      </ul>

      {/* Hamburger menu (for smaller screens if needed) */}
      <div>
        <AiOutlineMenu size={2} />
      </div>
    </div>
  );
};

export default Navbar;
