import React from "react";
import Learn from "./Learn";
import Followers from "./Followers";

function Bannerp(props) {
  return (

    <section className="bg-white   ">
     <Learn/>
    
     
      <div className="flex justify-evenly  flex-wrap   ">
        
        <div className=" h-[200px] ">
          <h1
            className=" md:text-[30px] md:w-[612px] md:h-[60px] md:pt-40 text-[24px] w-[350px] h-[50px] pt-10 ml-5
          "
          >
            {props.head}
          </h1>

          <p className="text-[16px] md:w-[503px] md:h-[68px] md:text-[18px]  w-[350px] mt-30 ml-5">{props.story}</p>
        </div>

        <div className=" md:flex md:flex-col -mt-5 ">
          <img src={props.url} alt="pic" className="absolute z-20  w-70 md:w-100 md:top-20 md:right-33 top-90" />

          <div className="rounded-full md:h-[465px] md:w-[465px] w-80 h-80 relative border-[30px] top-50 border-Helenmaroon md:top-30  z-10"></div>
        </div>
      </div>
     
    </section>
  );
}

export default Bannerp;
