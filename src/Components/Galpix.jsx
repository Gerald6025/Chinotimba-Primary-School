import React from 'react';

const Galpix = () => {
  return (
    <div className='flex flex-wrap justify-evenly h-auto md:h-200'>
      <div className='h-auto md:h-160 w-full md:w-[50%] flex flex-wrap justify-evenly pt-10 gap-y-0 gap-x-0 items-center mb-10'>
        <div>
          <img src="images/gal1.png" alt="" className='w-[295px] h-[354px] rounded-[10px] object-fit' />
        </div>
        <div>
          <img src="images/gal2.png" alt="" className='w-[295px] h-[354px] rounded-[10px] object-cover border-Helenmaroon border-2 md:ml-0 md:mt-0 ml-5 mt-20' />
        </div>
        <div>
          <img src="images/gal3.png" alt="" className='w-[295px] h-[175px] rounded-[10px] object-fit hidden md:block ' />
        </div>
        <div>
          <img src="images/gal4.png" alt="" className='w-[295px] h-[175px] rounded-[10px] object-cover hidden md:block ' />
        </div>
      </div>

      <div className='w-full md:w-[50%] h-auto md:h-160 pt-15 flex   h flex-col md:flex-row gap-7'>
        <div className='w-full md:w-auto hidden md:block'>
          <img src="images/gal5.png" alt="" className='w-[295px] h-[562px] rounded-[10px] object-cover' />
        </div>
        <div className='flex flex-col gap-y-12 items-center justify-center w-full md:w-auto'>
          <img src="images/gal6.png" alt="" className='w-[295px] h-[354px] rounded-[10px] object-cover' />
          <img src="images/gal7.png" alt="" className='w-[295px] h-[225px] rounded-[10px] object-cover mb-5' />
        </div>
      </div>
    </div>
  );
}

export default Galpix;
