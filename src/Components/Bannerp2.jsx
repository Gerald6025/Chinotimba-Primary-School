import React from "react";
import Learn from "./Learn";
import Follow from "./Follow";

function Bannerp2(props) {
  return (
    <>
      
      <div className="flex justify-evenly  flex-wrap  ">
        <div>
          <h1
            className="text-[40px] w-[271px] h-[40px] md:pt-30  pt-10
          "
          >
            {props.head}
          </h1>

          <p className="text-[16px] md:w-[572px] md:h-[84px] md:mt-30  mt-25 w-[340px]">{props.story}</p>
        </div>

        <div className="flex flex-col  ">
          <img src={props.url} alt="pic" className=" mt-15 -z-50    " />

         
       
        </div>
      </div>
    
      <hr className="-mt-12 w-full h-[2px] bg-Helenmaroon z-40" />
    </>
  );
}

export default Bannerp2;
