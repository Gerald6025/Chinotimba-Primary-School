import React from "react";

const Nav = () => {
  return (
    <div className="flex text-white bg-Helenmaroon list-none gap-20 items-center justify-center h-[32px] text-[15px] font-normal font-serif mt-10 w-full ">
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
      <div className="bg-white w-[118px] h-[54px] rounded-bl-4xl rounded-br-4xl border-[1px] border-Helenmaroon items-center justify-center flex">
        <img src="./Chinotimba-primary 1.png" alt="logo" />
      </div>
      <li>
        <a href="#">News & Events</a>
      </li>
      <li>
        <a href="#">Gallery</a>
      </li>
      <li className="border-white border-[1px] px-2.5 rounded-[10px]">
        <a href="#">Contact Us</a>
      </li>
    </div>
  );
};

export default Nav;
