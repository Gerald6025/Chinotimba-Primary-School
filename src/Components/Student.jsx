import React from "react";

const Student = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 text-center gap-6">
        <p className="text-sm">Contact Form</p>
        <h1 className="text-4xl md:text-5xl font-bold ">
          Student Information
        </h1>
        <p className="text-md md:text-xl ">
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs.
        </p>
      </div>

      <div className="min-h-screen bg-center bg-cover bg-blend-overlay p-4 md:p-8 lg:p-16 text-gray-800">
        <div className="relative h-auto w-full bg-white flex items-center justify-center gap-4 p-4">
          <div className="w-32 h-20 border-2 border-[#262626] rounded-lg flex items-center justify-center bg-Helenmaroon z-10">
            <a href="">
              <img src="public/images/icon.png" alt="Icon 1" />
            </a>
          </div>
          <div className="w-32 h-20 border-2 border-[#262626] rounded-lg flex items-center justify-center bg-Helenmaroon z-10">
            <a href="">
              <img src="public/images/icon (1).png" alt="Icon 2" />
            </a>
          </div>
          <div className="w-32 h-20 border-2 border-[#262626] rounded-lg flex items-center justify-center bg-Helenmaroon z-10">
            <a href="">
              <img src="public/images/icon (2).png" alt="Icon 3" />
            </a>
          </div>
        </div>

        <div className="mx-auto border-2 border-[#262626] rounded-lg p-8 shadow-2xl shadow-[#1e1e1e] relative mt-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <label className="font-semibold">Parent Name</label>
              <input
                className="border p-3 bg-[#640f2428] rounded"
                type="text"
                placeholder="Enter Parent Name"
                name="fullName"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-semibold">Email Address</label>
              <input
                className="border p-3 bg-[#640f2428] rounded"
                type="email"
                placeholder="Enter Email Address"
                name="email"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-semibold">Phone Number</label>
              <input
                className="border p-3 bg-[#640f2428] rounded"
                type="tel"
                placeholder="Enter Phone Number"
                name="phone"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-semibold">Student Name</label>
              <input
                className="border p-3 bg-[#640f2428] rounded"
                type="text"
                placeholder="Enter Student Name"
                name="studentName"
                required
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-semibold">Student Age</label>
              <input
                className="border p-3 bg-[#640f2428] rounded"
                type="number"
                placeholder="Enter Student Age"
                name="studentAge"
                required
              />
            </div>

            <div className="flex flex-col gap-4 md:col-span-2">
              <label className="font-semibold">Additional Information</label>
              <textarea
                className="border h-40 p-3 bg-[#640f2428] rounded"
                placeholder="Enter Your Message"
                name="additionalInfo"
              />
            </div>

            <div className="flex flex-col gap-4 md:col-span-2">
              <button
                type="submit"
                className="bg-Helenmaroon text-white py-3 rounded w-40"
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
