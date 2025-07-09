import React from "react";
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <>
      <div className="flex h-[83vh] bg-white w-full  flex-wrap ">
        <div className="ml-15 pt-45 mt-3   bg-[url(Ab.PNG)] bg-center bg-cover h-120 bg-gray-200 bg-blend-overlay ">
          <p className="pb-5 font-serif">
            "Nurturing Young Minds, Building a Bright Future"
          </p>
          <h1 className="text-[40px] mb-5 
          ">
            Welcome to Chinotimba Primary School
          </h1>
          <p className="text-[16px] w-[669px]">
            "A warm welcome to Chinotimba Primary School! Here in the heart of
            Victoria Falls, we are dedicated to providing a foundational
            education that empowers our pupils for a bright future. We believe
            in nurturing young minds and building strong community ties."
          </p>
          <div className="flex gap-2 flex-wrap mt-15">
            <button className=" border-Helenmaroon border-[1px] py-1 w-[139px] rounded-[10px] hover:bg-Helenmaroon hover:text-white">
              <Link to="/enroll">Enroll Now</Link>{" "}
            </button>
            <button className="  border-Helenmaroon border-[1px] py-1 w-[139px] rounded-[10px]  hover:bg-Helenmaroon hover:text-white  ">
              <a href="">Register </a>{" "}
            </button>
          </div>
        </div>
        <div className="mt-[80px] w-[450px] h-[612px] ml-10">
          <img className="" src="./Banner.png" alt="banner" />
        </div>
      </div>

      <div className=" flex justify-evenly flex-wrap">
        <div className="flex items-center gap-2">
          <img src="./assessment.png" alt="assesment" />
          <p className="text-[15px]">Assessments & Certification</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="./core.png" alt="assesment" />
          <p className="text-[15px]">Core Academic Curriculum</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="./Practical.png" alt="assesment" />
          <p className="text-[15px]">Practical & Life Skill Subjects</p>
        </div>

        <div className="flex items-center gap-2">
          <img src="./creative.png" alt="assesment" />
          <p className="text-[15px]">Creative Arts & Physical Education</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
