import React from "react";
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-auto md:h-[83vh] bg-white w-full flex-wrap">
        
        <div className="ml-4 md:ml-15 pt-6 md:pt-45 mt-3 bg-[url(./assets/Ab.PNG)] bg-center bg-cover bg-gray-200 bg-blend-overlay h-auto md:h-120 w-full md:w-1/2 p-4 md:p-0">
          <p className="pb-3 text-[14px] md:text-[16px] font-serif">
            "Nurturing Young Minds, Building a Bright Future"
          </p>
          <h1 className="text-[24px] sm:text-[32px] md:text-[35px]  mb-5">
            Welcome to Chinotimba Primary School
          </h1>
          <p className="text-[14px] md:text-[16px] w-full md:w-[669px]">
            "A warm welcome to Chinotimba Primary School! Here in the heart of
            Victoria Falls, we are dedicated to providing a foundational
            education that empowers our pupils for a bright future. We believe
            in nurturing young minds and building strong community ties."
          </p>
          <div className="flex gap-2 flex-wrap mt-6 md:mt-15">
            <button className="border-Helenmaroon border-[1px] py-1 w-[139px] rounded-[10px] hover:bg-Helenmaroon hover:text-white">
              <Link to="/enroll">Enroll Now</Link>
            </button>
            <button className="border-Helenmaroon border-[1px] py-1 w-[139px] rounded-[10px] hover:bg-Helenmaroon hover:text-white">
              <a href="">Register </a>
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-[80px] w-full md:w-[450px] h-auto md:h-[612px] ml-0 md:ml-10 flex justify-center">
          <img className="w-[90%] md:w-full h-120 object-contain  " src="src/assets/Banner.png" alt="banner" />
        </div>
      </div>

      <div className="flex justify-center md:justify-evenly flex-wrap gap-4 md:gap-0 mt-6 md:mt-10 px-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <img src="src/assets/assessment.png" alt="assesment" />
          <p className="text-[14px] md:text-[15px]">Assessments & Certification</p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <img src="src/assets/core.png" alt="assesment" />
          <p className="text-[14px] md:text-[15px]">Core Academic Curriculum</p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <img src="src/assets/Practical.png" alt="assesment" />
          <p className="text-[14px] md:text-[15px]">Practical & Life Skill Subjects</p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <img src="src/assets/creative.png" alt="assesment" />
          <p className="text-[14px] md:text-[15px]">Creative Arts & Physical Education</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
