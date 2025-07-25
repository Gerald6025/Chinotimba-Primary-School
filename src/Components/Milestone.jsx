import React from "react";

const Milestone = () => {
  return (
    <div className=" md:h-150 md:flex  md:justify-evenly md:mr-20  h-250  ">
      <div className=" h-140 pt-15 flex flex-col  ">
        <p className=" md:text-[12px]  md:w-[173px] md:h-[16px] md:ml-0  text-center  ">
          Latest News & Upcoming Events
        </p>

        <h1 className="  text-[20px]  md:ml-0  w-80 md:text-[30px] h-[60px] md:w-[561px] ml-8 mr-8 text-center md:text-start pt-5 ">
          Don’t Miss a Moment – Catch Up on the Latest at Chinotimba!
        </h1>
        <p className="md:pt-20   md:w-[571px] md:h-[51px] pt-10 text-center md:text-start ml-8 mr-8 md:ml-0  ">
         In late 2024, our talented drum‑majorettes proudly represented the school at the SADC Regional World Children’s Day celebrations in Victoria Falls, adding energy and cultural pride to the festivities.














 




        </p>

        <div className="md:flex  md:gap-6  md:items-start">
          <div className="flex gap-2">
            <img
              className="border-Helenmaroon border-3 w-[75px] h-[75px] rounded-full md:mt-30 mt-10 ml-7 md:ml-0"
              src="images/news.png"
              alt=""
            />
            <div>
              <h1 className="w-[35px] h-[15px] mt-12 md:mt-32  ">News</h1>
              <p className="w-[178px] h-[26px] text-[10px]  mt-2">
                {" "}
                 Nulla facere alias in Lorem, ipsum dolor sit amet consec

              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <img
              className="border-Helenmaroon border-3 w-[75px] h-[75px] rounded-full mt-10 md:mt-30 ml-7 md:ml-0"
              src="images/eve.png"
              alt=""
            />
            <div>
              <h1 className="w-[35px] h-[15px] md:mt-32 mt-12">Events</h1>
              <p className="w-[178px] h-[26px] text-[10px] mt-2">
                {" "}
                Nulla facere alias in Lorem, ipsum dolor sit amet consec
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-15">
          <div>
            <button className="border-2 border-[#640F24] w-[132px] h-[35px] bg-white ml-30 md:ml-0  ">
              <a href="">Explore More</a>
            </button>
          </div>
          <div>
            <div className="flex gap-2 ">
              <img
                className="border-Helenmaroon border-3 w-[50px] h-[50px] md:block hidden rounded-full object-cover object-center "
                src="images/saa.png"
                alt=""
              />
              <div className="md:block hidden">
                <h1 className="w-[90px] h-[15px]  text-[15px]  ">
                  Sarah Ndlovu
                </h1>
                <p className="w-[303px] h-[26px] text-[10px]  mt-2">
                  {" "}
                  Nulla facere alias in Lorem, ipsum dolor sit amet consec
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-white p-6 -mt-30">
        <div className="relative  z-10  ">
          <div className="rounded-lg overflow-hidden shadow-lg  border-2 border-Helenmaroon  z-20">
            <img
              src="images/woo.png"
              alt=""
              className="w-[450px] h-auto object-cover z-10"
            />
          </div>
          <div className="border-Helenmaroon border-8 w-[400px] h-75 absolute left-[100px] top-10 rounded-lg -z-10 md:block hidden "></div>

          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-lg overflow-hidden shadow-lg border-2 border-Helenmaroon z-10 md:block hidden">
            <img
              src="images/run.png"
              alt=""
              className="w-[234px] h-[228px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
