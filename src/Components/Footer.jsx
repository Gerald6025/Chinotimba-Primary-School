import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#00000059] bg-[url(src/assets/foot.png)] bg-blend-overlay w-full h-[420px] bg-center bg-cover flex  justify-center gap-[200px] pt-10 ">
      <div className="text-white list-none flex flex-col gap-6 text-[15px] ">
        <h1 className="text-[20px] text-white">Navigation</h1>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Academics</a>
        </li>
        <li>
          <a href="#">Administration</a>
        </li>
        <li>
          <a href="#">News & Events</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </div>

      <div className="text-white flex flex-col gap-8 relative left-30 ">
        <h1 className="text-white text-[20px]">Get Updates</h1>
        <p className="w-[467px] h-[55px] text-[15px]">
          On March 25, 2025, the Rotary Club of Victoria Falls officially handed over a new borehole, solar-powered pump, and agricultural equipment to Chinotimba Primary School—ensuring reliable access to water and empowering hands-on farming initiatives for students cite.org.zw+9breezefm.co.zw+9chronicle.co.zw+9.{" "}
        </p>
         <form className="flex flex-col gap-3">
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border-1  border-white bg-Helenmaroon rounded-[10px] text-white  mt-10 w-[296px] h-[38px] pl-5 required"
        />
        <div className="flex gap-5">
        
          <input
            required
            name="firstName"
            type="text"
            placeholder="First Name"
            className="border-1 border-white bg-Helenmaroon rounded-[10px] text-white   w-[179px] h-[38px] pl-5"
          />
          <button className="border-1 border-white bg-Helenmaroon rounded-[10px]  text-white  w-[98px] h-[38px] pl-">
            <a href="">Sign up</a>
          </button>
        </div>
        </form>
        <div className="flex gap-10 mt-5">
          <a href=""><img src="fb.png" alt="" /></a>
           <a href=""><img src="ig.png" alt="" /></a>
            <a href=""><img src="twit.png" alt="" /></a>
             <a href=""><img src="in.png" alt="" /></a>
        </div>
      </div>

      <div className="flex flex-col text-white gap-5">
        <h1 className="text-[20px] text-white">Send us a message</h1>
        <p className="text-[15px]">+263 788 220 444</p>
        <p className="w-[246px] h-[58px]">
         Have a question, suggestion, or need assistance? We’re here to help! Feel free to reach us.





          <img
            src="src/assets/Chinotimba-primary 1.png"
            alt=""
            className="w-[100px] h-[100px] object-contain mt-5"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
