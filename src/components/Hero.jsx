import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-10 text-sm'>
      <div>{/* Left nav section */}</div>

      <div className='flex justify-center items-center gap-10'>
        {/* Right nav section */}

        <div>
          <ul className='flex gap-10'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button className='bg-black text-white px-3 py-2'>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
