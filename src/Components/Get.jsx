import React from "react";

const Get = () => {
  return (
    <div className="h-100">
      <div className="flex mt-20  justify-evenly ">
        <div className="relative bg-white p-8 flex flex-wrap justify-center  gap-6">
          <div className="flex flex-wrap justify-center items-start gap-6  ">
            <img
              src="./image (1).png"
              alt="Students working on laptops"
              className="w-[379px] h-[243px] rounded-lg "
            />
            <img
              src="./image (2).png"
              alt="Students collaborating on laptops"
              className="w-[310px] h-[209px] rounded-lg shadow-lg relative z-10 right-26 top-27"
            />
          </div>

          <div className="absolute bottom-40 left-102 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img
              src="./25.png"
              alt="Circular badge"
              className="w-[100px] h-[100px]rounded-full  shadow-lg"
            />
          </div>
        </div>

        <div className=" relative right-25 ">
          <h1 className="text-[30px] font-normal font-serif mt-5 w-[294px] h-[30px] mb-2 ">
            Get to know About us
          </h1>
          <h1 className="text-[30px] font-normal font-serif mt-5 w-[533px] h-[60px]">
            "Shaping Future Leaders, One Learner at a Time”
          </h1>
          <p className="text-[15px] w-[565px] h-[51px] mt-10">
            Where every child’s journey begins with knowledge, creativity, and
            care . Proudly serving the Victoria Falls community with a strong
            foundation in academics, culture, and character development.
          </p>
          <div className="flex items-center justify-center mt-8 gap-3">
            <div className=" w-[22px] h-[22px] ">
              <img src="Check.png" alt="" />
            </div>
            <div>
              <p className="text-[15px]">
                Stands as a vital educational institution in Zimbabwe’s Victoria
                Falls community.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mt-2 gap-3">
            <div className=" w-[22px] h-[22px] ">
              <img src="Check.png" alt="" />
            </div>
            <div>
              <p className="text-[15px]">
                Stands as a vital educational institution in Zimbabwe’s Victoria
                Falls community.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-2 gap-3">
            <div className=" w-[22px] h-[22px] ">
              <img src="Check.png" alt="" />
            </div>
            <div>
              <p className="text-[15px]">
                Stands as a vital educational institution in Zimbabwe’s Victoria
                Falls community.
              </p>
            </div>
          </div>

          <button className=" border-Helenmaroon border-[1px] py-2 w-[139px] rounded-[10px] mt-5 text-[12px]">
            <a href="">Read More</a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Get;
