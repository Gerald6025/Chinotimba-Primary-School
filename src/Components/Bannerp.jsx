import React from "react";
import Learn from "./Learn";
import Followers from "./Followers";

function Bannerp(props) {
  return (
    <section className="bg-white  ">
      <Learn  />
      <div className="flex justify-evenly  flex-wrap   ">
        
        <div className=" h-[200px]">
          <h1
            className="text-[30px] w-[612px] h-[60px] pt-40 
          "
          >
            {props.head}
          </h1>

          <p className="text-[16px] w-[503px] h-[68px] mt-30">{props.story}</p>
        </div>

        <div className="flex flex-col -mt-5 ">
          <img src={props.url} alt="pic" className="absolute z-20  " />

          <div className="rounded-full h-[465px] w-[465px] relative border-[30px] border-Helenmaroon top-30  z-10"></div>
        </div>
      </div>
      <Followers url1='images/1 (2).png'
                 url2='images/2 (2).png'
                 url3='images/3 (2).png'
                 url4='images/4.png'
                 url5='images/5.png'
      text='Trusted by 50k+ Followers'
      
      />
    </section>
  );
}

export default Bannerp;
