import React from "react";

const Follow = (props, className = '') => {
  return (
    <div className={`flex items-center ml-10 relative bottom-15 z-50 ${className}`}>
      <img
        src={props.url1}
        alt=""
        className="rounded-full h-[50px] w-[50px] object-cover z-10  "
      />
      <img
        src={props.url2}
        alt=""
        className="rounded-full h-[50px] w-[50px] object-cover z-20 relative right-4"
      />
      <img
        src={props.url3}
        alt=""
        className="rounded-full h-[50px] w-[50px] object-cover z-30 relative right-8"
      />
      <img
        src={props.url4}
        alt=""
        className="rounded-full h-[50px] w-[50px] object-cover z-40 relative right-12"
      />
      <img
        src={props.url5}
        alt=""
        className="rounded-full h-[50px] w-[50px] object-cover z-50 relative right-16"
      />
      <p className="relative right-15 text-[20px]">+{props.text}</p>
    </div>
  );
};

export default Follow;
