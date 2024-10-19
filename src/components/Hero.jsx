const Hero = () => {
  return (
    <>
    
      

      <div className='max-w-screen-xl mx-auto flex justify-between items-center gap-10 mt-5'>
     
      <div className='left_navbar '>
          <h1 className='text-4xl text-green-400 bg-gray-50 px-2 py-2 rounded-xl'>
            <i className='ri-arrow-left-right-line'></i>
          </h1>
        </div>

        <div className="flex gap-5 items-center">
          <ul className='flex gap-10'>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        <div>
          <button className='bg-black text-white px-3 py-2'>Get in touch</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
