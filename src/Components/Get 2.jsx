import React from "react";

const Get2 = () => {
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
          <h1 className="text-[30px] font-normal font-serif  w-[294px] h-[30px] mb-10 ">
            Academics philosophy
          </h1>
          
          <p className="text-[15px] w-[565px] h-[51px] mt-20">
           we believe that every child has the potential to succeed when given the right support, environment, and encouragement. Our academic philosophy is rooted in the pursuit of excellence, inclusivity, and lifelong learning. We strive to provide a balanced, learner-centered education that develops not only strong literacy and numeracy skills, but also critical thinking, creativity, and confidence.Through dedicated teaching, continuous assessment, and strong community involvement, we aim to nurture independent thinkers who are prepared for secondary education and responsible citizenship.
          </p>

          <button className=" border-Helenmaroon border-[1px] py-2 w-[139px] rounded-[10px] mt-40 text-[12px]">
            <a href="">Read More</a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Get2 ;
