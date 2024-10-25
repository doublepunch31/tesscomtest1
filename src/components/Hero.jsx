import React from 'react';
import { ReactTyped as Typed } from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        
        {/* Subtitle */}
        <p className='text-[#FF4136] font-bold p-4 md:text-2xl sm:text-xl '>
          Leap into the future
        </p>
        
        {/* Main Title */}
        <h1 className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 text-[#ffffff]'>
          Software. Science. Finance.
        </h1>
        
        {/* Typed text section */}
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-4xl text-xl py-1 text-[#ffffff]'>
            Prepare to&nbsp;
          </p>
          <Typed
            className='md:text-3xl sm:text-4xl text-xl font-bold text-[#ffffff]'
            strings={['Take off','Innovate', 'Improvise', 'Initiate', 'Invent', 'Pioneer']}
            typeSpeed={100}
            backSpeed={120}
            loop
          />
        </div>
        
        {/* Supporting Text */}
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
        </p>
        
        {/* Call to Action Button */}
        <button className='bg-[#FF4136] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
