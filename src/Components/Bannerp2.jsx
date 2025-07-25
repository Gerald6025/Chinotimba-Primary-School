import React from "react";
import Learn from "./Learn";
import Follow from "./Follow";

function Bannerp2(props) {
  return (
    <>
      
      <div className="flex justify-evenly  flex-wrap ">
        <div>
          <h1
            className="text-[40px] w-[271px] h-[40px] pt-30 
          "
          >
            {props.head}
          </h1>

          <p className="text-[16px] w-[572px] h-[84px] mt-30">{props.story}</p>
        </div>

        <div className="flex flex-col  ">
          <img src={props.url} alt="pic" className=" mt-15 -z-50   " />

         
       
        </div>
      </div>
      <Follow url1='images/1 (2).png'
                 url2='images/2 (2).png'
                 url3='images/3 (2).png'
                 url4='images/4.png'
                 url5='images/5.png'
      text='Trusted by 50k+ Followers'
      className=""
      />
      <hr className="-mt-12 w-full h-[2px] bg-Helenmaroon z-40" />
    </>
  );
}

export default Bannerp2;
