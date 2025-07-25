import React from "react";

const Discover = () => {
  return (
    <div className="mt-50">
      <h1 className="w-[530px] h-[34px]  text-[30px] ml-15">
        Discover the Rich History of Chinotimba
      </h1>

      <div>
        <div className="flex mt-12  justify-evenly ">
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
                className="w-[244px] h-[310px] rounded-[10px]  relative z-20 left-17 bottom-52 object-cover"
              />
            </div>

            <div className="absolute bottom-63  transform -translate-x-1/2 -translate-y-1/2 z-20 bg-Helenmaroon w-[190px] h-[114px] rounded-[10px]"></div>
          </div>

          <div className=" relative right-25 ">
            <h1 className="text-[20px] font-normal font-serif mt-5 w-[591px] h-[46px] mb-2 ">
              Explore our history and discover how you can be part of our
              community’ continued growth and success
            </h1>

            <p className="text-[15px] w-[485px] h-[168px] mt-10">
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

            <button className=" border-Helenmaroon border-[1px] py-2 w-[139px] rounded-[10px] mt-50 text-[12px]">
              <a href="">Explore More</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
