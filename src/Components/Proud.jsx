import React from "react";

const Proud = () => {
  return (
    <div className=" h-150 md:pt-10   flex justify-evenly flex-wrap">
      <div className="flex flex-col gap-10 ">
        <div className="">
          <img
            src="images/Bad.jpg"
            alt=""
            className="border-1 border-Helenmaroon  md:ml-0 mt-0 ml-3 w-[350px] h-[230px] rounded-[10px]  object-cover md:mt-5 md:w-[571px]"
          />
        </div>

        <div className="flex gap-7">
          <img
            src="images/kids.png"
            alt=""
            className="w-[388px] h-[185px] object-cover rounded-[10px]"
          />

          <div className="w-[153px] h-[185px] border-[1px] rounded-[10px]  border-Helenmaroon flex flex-col gap-6">
         <h1 className="text-[30px] w-[56px] h-[30px] mt-5 ml-2">75%</h1>
         <h1 className="text-[20px] w-[197px] h-[60px] ml-2">Students who participated in activities</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="w-[460px] h-[60px] text-[30px] ">Achievements</h1>
        <p className="w-[551px] h-[70px] text-[15px]">
          {" "}
          Chinotimba Primary School is proud of its growing impact in education
          and community development.We’ve installed a solar-powered borehole to
          support clean water and agriculture, participated in cultural literacy
          projects with the Ducere Foundation, and our drum-majorettes have led
          regional parades. In a true show of unity, our school raised over
          R13,000 to help a fellow learner access life-saving medical care.{" "}
        </p>
        <div className="group relative max-w-[600px] mx-auto">
          <div className="relative">
            <img
              src="images/Archive.png"
              alt=""
              className="w-[536px] h-[255px] mt-20 rounded-[10px]"
            />

            <div className="absolute inset-0  group   flex items-center justify-center">
              <div className=" hidden group-hover:block text-white p-4 text-center bg-[#00000065] w-[536px] h-[255px] mt-20 rounded-[10px] mb-20 pt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-[4000ms] ease-in-out  ">
                <h3 className="text-xl font-bold">
                  Shaping Future Leaders, One Learner at a Time
                </h3>
                <p className="mt-2">
                  Chinotimba Primary School is a vibrant and inclusive learning
                  institution situated in the heart of Victoria Falls. For
                  decades, we have been committed to providing quality primary
                  education to the children of Chinotimba and surrounding
                  communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proud;
