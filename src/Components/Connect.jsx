import React from "react";

const Connect = () => {
  return (
    <div className="overflow-hidden">
      <div className=" md:h-150 flex h-170 justify-evenly  bg-white w-full ">
        <div className=" h-140 pt-1 flex flex-col md:pl-0 pl-4  ">
          <p className="text-[12px]  w-[173px] h-[16px]  ">Lets connect</p>

          <h1 className="  text-[30px] h-[60px] md:w-[561px] pt-5 w-[330px] ">
            Stay connected with us
          </h1>
          <p className="pt-5   md:w-[571px] md:h-[51px] w-[350px] h-[120px] ">
            We’re always happy to hear from parents, partners, and the
            community. Whether you have questions, feedback, or just want to
            stay updated on school events and achievements, feel free to reach
            out. Follow us, call us, or send a message — let’s keep in touch as
            we grow together!
          </p>

          <div className="flex  flex-col  ">
            <div className="flex gap-2">
              <img
                className=" w-[24px] h-[24px]  mt-23"
                src="images/locaton.png"
                alt=""
              />
              <div>
                <h1 className="w-[183px] h-[15px]  text-[15px] mt-22">Our Address</h1>
                <p className="md:w-[462px] md:h-[16px] text-[10px] w-[300px]  mt-2">
                
                  3R5J+W5F, Chinotimba Township, Victoria Falls, Matabeleland
                  North, Zimbabwe
                  reddit.com+13wanderlog.com+13teacher.ac+13 (Located near the
                  Chinotimba Bus Terminal and Victoria Falls Municipality)
                     {" "}
                </p>
              </div>
            </div>

            <div className="flex  gap-2">
              <img
                className=" w-[24px] h-[24px]  mt-13"
                src="images/email.png"
                alt=""
              />
              <div>
                <h1 className="w-[183px] h-[15px]  mt-12">Email Address</h1>
                <p className="w-[178px] h-[26px] text-[10px] mt-2">
                  {" "}
                  info@chinotimbaprimary.ac.zw
                </p>
              </div>
            </div>
            

            <div className="flex  gap-2">
              <img
                className=" w-[24px] h-[24px]  mt-10"
                src="images/phone.png"
                alt=""
              />
              <div>
                <h1 className="w-[35px] h-[15px] mt-9">Telephone</h1>
                <p className="w-[178px] h-[26px] text-[10px] mt-2">
                  {" "}
                  +263 78 385 5760
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center items-center min-h-screen  p-6 -mt-30">
          <div className="relative  z-20  ">
            <div className="rounded-lg overflow-hidden shadow-lg  md:block hidden -z-20 ">
              <img
                src="images/man.png"
                alt=""
                className="w-[400px] h-[350px] object-cover "
              />
            </div>
           <div className="absolute top-[90px] left-[-60px] bg-white w-[220px] h-[180px] rounded-lg md:block hidden" > </div>
            <div className=" bg-Helenmaroon w-[213px] h-[161px] absolute right-[250px] top-25 rounded-lg z-20 md:block hidden">
              <p className='text-[9px] text-white px-2 py-2'>“Thank you for visiting Chinotimba Primary School online. We’re here to answer your questions, guide you through admissions, or simply share more about what makes our school special. Whether you're a parent, partner, or friend of the school, feel free to reach out — we look forward to connecting with you!”</p>
           
           <p className='text-white px-2'>John Phiri</p>
           <p className="text-white px-2 text-[9px]">Head director</p>

            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
