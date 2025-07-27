import React from "react";

const Discover = () => {
  return (
    <div className="md:mt-70  mt-70 ">
      <h1 className="md:w-[530px] md:h-[34px]  md:text-[30px]  w-[300px] text-[20px] ml-10">
        Discover the Rich History of Chinotimba
      </h1>

      <div>
        <div className="md:flex mt-12  md:justify-evenly 
         ">
          <div className="relative bg-white p-8 flex flex-wrap justify-center  gap-6">
            <div className="flex flex-wrap justify-center items-start gap-6  ">
              <img
                src="images/chi.png"
                alt=""
                className="w-[373px] h-[378px] rounded-[10px]  object-cover "
              />

              <div className="w-[244px] h-[200px] rounded-[10px]  relative -z-0 right-37 top-45 bg-white"></div>

              <img
                src="images/teach.png"
                alt=""
                className="w-[244px] h-[310px] rounded-[10px] md:block hidden relative z-20 left-17 bottom-52 object-cover"
              />
            </div>

            <div className=" md:block hidden absolute bottom-63  transform -translate-x-1/2 -translate-y-1/2 z-20 bg-Helenmaroon w-[190px] h-[114px] rounded-[10px]"></div>
          </div>

          <div className=" relative md:right-25  ">
            <h1 className="md:text-[20px] text-[18px] font-normal font-serif md:mt-5   mt-0 md:w-[591px] w-[270px] h-[90px] md:h-[46px] mb-2 md:ml-0 ml-5">
              Explore our history and discover how you can be part of our
              community’ continued growth and success
            </h1>

            <p className="text-[15px] md:w-[485px] md:h-[168px] w-[340px] md:ml-0 ml-5   mt-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              facere alias in Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Nulla facere alias in Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Nulla facere alias in Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Nulla facere
              alias inLorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
              <br /> <br /> <br />
              Nulla facere alias in Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Nulla facere alias in Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Nulla facere alias in Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Nulla facere
              alias in Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Nulla facere alias in Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Nulla facere alias in
            </p>

            <button className=" border-Helenmaroon border-[1px] py-2 w-[139px] rounded-[10px] md:mt-50 mt-10 text-[12px] md:ml-0 ml-25    ">
              <a href="">Explore More</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
