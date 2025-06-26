import React from "react";

const Milestone = () => {
  return (
    <div className=" h-150 flex  justify-evenly mr-20">
      <div className=" h-140 pt-15 flex flex-col  ">
        <p className="text-[12px]  w-[173px] h-[16px] ">
          Latest News & Upcoming Events
        </p>

        <h1 className="  text-[30px] h-[60px] w-[561px] pt-5">
          Don’t Miss a Moment – Catch Up on the Latest at Chinotimba!
        </h1>
        <p className="pt-20   w-[571px] h-[51px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere
          alias in Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nulla facere alias in Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nulla facere alias in Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.C
        </p>

        <div className="flex gap-6">
          <div className="flex gap-2">
            <img
              className="border-Helenmaroon border-3 w-[75px] h-[75px] rounded-full mt-30"
              src="news.png"
              alt=""
            />
            <div>
              <h1 className="w-[35px] h-[15px]  mt-32">News</h1>
              <p className="w-[178px] h-[26px] text-[10px]  mt-2">
                {" "}
                Nulla facere alias in Lorem, ipsum dolor sit amet consec
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <img
              className="border-Helenmaroon border-3 w-[75px] h-[75px] rounded-full mt-30"
              src="eve.png"
              alt=""
            />
            <div>
              <h1 className="w-[35px] h-[15px] mt-32">Events</h1>
              <p className="w-[178px] h-[26px] text-[10px] mt-2">
                {" "}
                Nulla facere alias in Lorem, ipsum dolor sit amet consec
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-15">
          <div>
            <button className="border-2 border-[#640F24] w-[132px] h-[35px] bg-white ">
              <a href="">Explore More</a>
            </button>
          </div>
          <div>
            <div className="flex gap-2 ">
              <img
                className="border-Helenmaroon border-3 w-[50px] h-[50px] rounded-full object-cover object-center "
                src="saa.png"
                alt=""
              />
              <div>
                <h1 className="w-[90px] h-[15px]  text-[15px] ">
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
              src="woo.png"
              alt=""
              className="w-[450px] h-auto object-cover z-10"
            />
          </div>
          <div className="border-Helenmaroon border-8 w-[400px] h-75 absolute left-[100px] top-10 rounded-lg -z-10"></div>

          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-lg overflow-hidden shadow-lg border-2 border-Helenmaroon z-10">
            <img
              src="run.png"
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
