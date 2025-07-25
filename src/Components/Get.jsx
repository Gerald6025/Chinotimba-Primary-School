import React from "react";
import { Link } from 'react-router-dom'

const Get = () => {
  return (
    <div className="h-auto">
      <div className="flex flex-col lg:flex-row mt-10 md:mt-20 justify-center items-center gap-10 px-4 md:px-10 md:gap-20">
        <div className="relative bg-white p-4 md:p-8 flex flex-wrap md:justify-evenly gap-4 md:gap-6">
          <div className="flex flex-wrap justify-center items-start gap-4 md:gap-6 ">
            <img
              src="src/assets/image (1).png"
              alt="Students working on laptops"
              className="w-[90%] hidden sm:w-[300px] md:w-[350px] h-auto md:h-[243px] md:relative md:right-20 md:block rounded-lg "
            />
            <img
              src="src/assets/image (2).png"
              alt="Students collaborating on laptops"
              className="w-[80%] sm:w-[220px]  md:w-[280px] h-auto md:h-[209px] rounded-lg shadow-lg relative md:left-40  md:bottom-40"
            />
          </div>

          <div className="absolute bottom-20 md:bottom-77 left-1/2 md:left-100  md:absolute transform -translate-x-1/2 -translate-y-1/2 z-20">
            <img
              src="src/assets/25.png"
              alt="Circular badge"
              className="w-[60px] hidden sm:w-[80px]  md:w-[100px] md:block h-[60px] sm:h-[80px] md:h-[100px] rounded-full shadow-lg"
            />
          </div>
        </div>

        <div className="relative text-center md:text-left px-4 md:px-0 md:mb-15">
          <h1 className="text-[20px] sm:text-[26px] md:text-[30px] font-normal font-serif mt-3 md:mt-5 w-full md:w-[294px] mb-2">
            Get to know About us
          </h1>
          <h1 className="text-[20px] sm:text-[26px] md:text-[30px] font-normal  mt-3 md:mt-5 w-full md:w-[533px] font-roboto">
            "Shaping Future Leaders, One Learner at a Time”
          </h1>
          <p className="text-[14px] sm:text-[15px] w-full md:w-[565px] mt-6 md:mt-10">
            Where every child’s journey begins with knowledge, creativity, and
            care. Proudly serving the Victoria Falls community with a strong
            foundation in academics, culture, and character development.
          </p>

          <div className="flex justify-center md:justify-start mt-6 gap-3">
            <p className="text-[14px] sm:text-[15px] w-full md:w-[610px]">
              <li>
                “The approach is to develop a complete citizen who will leave
                the school with life skills.”
              </li>
            </p>
          </div>

          <div className="flex justify-center md:justify-start mt-2 gap-3">
            <p className="text-[14px] sm:text-[15px] w-full md:w-[610px]">
              <li>
                The children loved translating stories told to them by their
                elders in local languages
              </li>
            </p>
          </div>

          <div className="flex justify-center md:justify-start mt-2 gap-3">
            <p className="text-[14px] sm:text-[15px] w-full md:w-[610px]">
              <li>
                “Growing up in a family of teachers develop children from
                pre-school to university”
              </li>
            </p>
          </div>

          <button className="border-Helenmaroon border-[1px] py-2 w-[120px] sm:w-[139px] rounded-[10px] mt-5 text-[12px] hover:bg-Helenmaroon hover:text-white transition duration-200">
            <Link to ="/about">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Get;
