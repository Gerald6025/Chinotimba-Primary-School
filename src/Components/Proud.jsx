import React from "react";

const Proud = () => {
  return (
    <div className="flex flex-col md:flex-row md:pt-10 justify-evenly flex-wrap gap-8 px-4">
      
      <div className="flex flex-col gap-8 md:max-w-[600px] w-full">
        
        <div>
          <img
            src="images/Bad.jpg"
            alt=""
            className="border border-Helenmaroon rounded-[10px] object-cover w-full h-[200px] md:h-[200px]"
          />
        </div>

        
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src="images/kids.png"
            alt=""
            className="rounded-[10px] object-cover w-full md:w-[60%] h-[185px]"
          />

          <div className="border border-Helenmaroon rounded-[10px] p-4 flex flex-col justify-center bg-white w-full md:w-[40%]">
            <h1 className="text-[28px] font-semibold">75%</h1>
            <h2 className="text-[16px] mt-2">
              Students who participated in activities
            </h2>
          </div>
        </div>
      </div>

    
      <div className="flex flex-col gap-4 w-full md:max-w-[600px]">
        <h1 className="text-[24px] md:text-[30px] font-bold">Achievements</h1>

        <p className="text-[14px] md:text-[15px] leading-relaxed">
          Chinotimba Primary School is proud of its growing impact in education
          and community development. We’ve installed a solar-powered borehole to
          support clean water and agriculture, participated in cultural literacy
          projects with the Ducere Foundation, and our drum-majorettes have led
          regional parades. In a true show of unity, our school raised over
          R13,000 to help a fellow learner access life-saving medical care.
        </p>

        <div className="group relative w-full h-70">
          <div className="relative">
            <img
              src="images/Archive.png"
              alt=""
              className="w-full h-[200px] md:h-[200px] mt-6 rounded-[10px] object-cover"
            />

      
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hidden group-hover:block text-white text-center bg-[#0000007a] bg-opacity-50 w-full h-full p-6 rounded-[10px] transition-opacity duration-700 opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold">
                  Shaping Future Leaders, One Learner at a Time
                </h3>
                <p className="mt-2 text-sm md:text-base">
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
