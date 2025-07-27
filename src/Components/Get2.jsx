import React from "react";

const Get = () => {
  return (
    <div className="h-100 ">
      <div className="flex mt-20  justify-evenly gap-20 ">
        <div className="relative bg-white p-8 flex flex-wrap justify-center  gap-6">
          <div className=" md:flex flex-wrap justify-center items-start gap-6 hidden  ">
            <img
              src="images/Aca.png"
              alt=""
              className="w-[277px] h-[310px] rounded-lg "
            />
            <img
              src="images/ki.png"
              alt="Students collaborating on laptops"
              className="w-[285px] h-[309px] rounded-lg shadow-lg relative z-10 right-17 top-25 object-cover"
            />
          </div>

        </div>

        <div className=" relative right-25 ">
          <h1 className="text-[30px] font-normal font-serif mt-5 md:w-[298px] h-[30px] mb-2 w-[320px]  ">
            Academics philosophy
          </h1>
         
          <p className="text-[15px] md:w-[565px] md:h-[51px] mt-10 w-[300px]">
           we believe that every child has the potential to succeed when given the right support, environment, and encouragement. Our academic philosophy is rooted in the pursuit of excellence, inclusivity, and lifelong learning. We strive to provide a balanced, learner-centered education that develops not only strong literacy and numeracy skills, but also critical thinking, creativity, and confidence.Through dedicated teaching, continuous assessment, and strong community involvement, we aim to nurture independent thinkers who are prepared for secondary education and responsible citizenship.
          </p>
         

          <button className=" border-Helenmaroon border-[1px] py-2 w-[139px] rounded-[10px] md:mt-50 mt-10 text-[12px]">
            <a href="">Read More</a>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Get;
