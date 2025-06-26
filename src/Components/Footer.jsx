import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#00000059] bg-[url(foot.png)] bg-blend-overlay w-full h-[420px] bg-center bg-cover flex  justify-center gap-[250px] pt-10 ">
      <div className="text-white list-none flex flex-col gap-6 text-[15px]">
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

      <div className="text-white flex flex-col gap-6 ">
        <h1 className="text-white text-[20px]">Get Updates</h1>
        <p className="w-[278px] h-[55px] text-[15px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere
          alias in Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nulla facere alias in{" "}
        </p>
        <input
          type="text"
          placeholder="Email"
          className="border-1 border-white bg-Helenmaroon rounded-[10px] text-white  mt-10 w-[296px] h-[38px] pl-5"
        />
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="First Name"
            className="border-1 border-white bg-Helenmaroon rounded-[10px] text-white   w-[179px] h-[38px] pl-5"
          />
          <button className="border-1 border-white bg-Helenmaroon rounded-[10px]  text-white  w-[98px] h-[38px] pl-">
            <a href="">Sign up</a>
          </button>
        </div>
      </div>

      <div className="flex flex-col text-white gap-5">
        <h1 className="text-[20px] text-white">Send us a message</h1>
        <p className="text-[15px]">+263 788 220 444</p>
        <p className="w-[246px] h-[58px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere
          alias in Lorem, ipsum dolor sit
          <img
            src="Chinotimba-primary 1.png"
            alt=""
            className="w-[100px] h-[100px] object-contain mt-5"
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;
