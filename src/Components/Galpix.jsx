import React from 'react'

const Galpix = () => {
  return (
   <div className='flex justify-evenly flex-wrap'>
   
   <div className='h-160 w-[50%] flex flex-wrap justify-evenly pt-10 gap-y-0 gap-x-0 items-center mb-10 '>
      <div>
        <img src="src/assets/gal1.png" alt="" className='w-[295px] h-[354px] rounded-[10px] object-fit' />
      </div>
    
    <div>
        <img src="src/assets/gal2.png" alt="" className='w-[295px] h-[354px] rounded-[10px] object-cover border-Helenmaroon border-2' />
      </div>
    
    <div>
        <img src="src/assets/gal3.png" alt="" className='w-[295px] h-[175px] rounded-[10px] object-fit' />
      </div>

    <div>
        <img src="src/assets/gal4.png" alt="" className='w-[295px] h-[175px] rounded-[10px] object-cover' />
      </div>

    </div>

 <div className=' w-[50%] h-160 pt-15 flex gap-7'>

<div>
<img src="src/assets/gal5.png" alt="" className='w-[295px] h-[562px] rounded-[10px] object-cover' />
</div>


<div className='flex flex-col gap-y-12 items-center justify-center'>
<img src="src/assets/gal6.png" alt="" className='w-[295px] h-[354px] rounded-[10px] object-cover' />
<img src="src/assets/gal7.png" alt="" className='w-[295px] h-[225px] rounded-[10px] object-cover mb-5' />

</div>



 
 
 
 
 
 </div>











    </div>
  )
}

export default Galpix
