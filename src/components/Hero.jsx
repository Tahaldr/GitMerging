const Hero = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div>
        {/* Left nav section made by BilalnessMaster */}
        <div className='left_navbar '>
          <h1 className='text-4xl text-black bg-gray-50 px-2 py-2 rounded'>
            <i className='ri-arrow-left-right-line'></i>
          </h1>
        </div>
      </div>

      <div className="flex justify-between items-center gap-10">
        {/* Right nav section made by Tahaldr */}

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
