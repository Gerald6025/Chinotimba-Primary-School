import React from "react";

const Student = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-50 mt-10  text-center m-auto gap-6  ">
        <p>Contact Form</p>
        <h1 className="text-[58px] w-[782px] h-[75px]  font-bold">
          Student Information
        </h1>
        <p className="text-[20px] w-[782px] h-[90px]">
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs
        </p>
      </div>

      <div className="min-h-screen  bg-center bg-cover bg-blend-overlay p-4 md:p-8 lg:p-16 text-gray-800">
       
       <div className="relative  h-50 w-306  bg-white flex items-center justify-center gap-4 ">
        <div className="w-[124px] h-[74px] border-[2px] border-[#262626] rounded-[8px] flex items-center justify-center bg-Helenmaroon z-10"> <a href=""> <img src="src/assets/icon.png" alt="" /></a></div>
        <div   className="w-[124px] h-[74px] border-[2px] border-[#262626] rounded-[8px] flex items-center justify-center bg-Helenmaroon z-10"> <a href=""> <img src="src/assets/icon (1).png" alt="" /></a></div>
        <div   className="w-[124px] h-[74px] border-[2px] border-[#262626] rounded-[8px] flex items-center justify-center bg-Helenmaroon z-10"> <a href=""> <img src="src/assets/icon (2).png" alt="" /></a></div>

       </div>
       
       
        <div className=" h-220 mx-auto border-[2px] border-[#262626] rounded-[12px] bottom-25 p-30 shadow-2xl shadow-[#1e1e1e]  relative">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className="flex flex-col gap-4">
              <p className="w-[566px] h-[33px] font-semibold">Parent Name</p>
              <input
                className="border p-3 w-115 bg-[#640f2428] rounded "
                type="text"
                placeholder="Enter Parent Name"
                name="fullName"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="w-[566px] h-[33px] font-semibold">Email Address</p>
              <input
                className="border w-115 p-3 rounded bg-[#640f2428] "
                type="email"
                placeholder=" Enter Email Address"
                name="email"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="w-[566px] h-[33px] font-semibold">Phone Number</p>
              <input
                className="border w-115 p-3 rounded bg-[#640f2428]"
                type="tel"
                placeholder=" Enter Phone Number"
                name="phone"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="w-[566px] h-[33px] font-semibold">Student Name</p>
              <input
                className="border w-115 p-3 rounded bg-[#640f2428]"
                type="text"
                placeholder=" Enter Student Name"
                name="guardianName"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <p className="w-[566px] h-[33px] font-semibold">Student Age</p>
              <input
                className="border p-3 rounded bg-[#640f2428]"
                type="number"
                placeholder="Enter Student Age"
                name="grade"
                required
              />
            </div>

            <textarea
              className="border h-40 p-3 rounded bg-[#640f2428] md:col-span-2"
              placeholder="Enter Your Message"
              name="additionalInfo"
            />

            <div className="flex flex-col gap-4 md:col-span-2">
              <button
                type="submit"
                className="bg-Helenmaroon text-white  py-3 rounded w-40"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Student;
