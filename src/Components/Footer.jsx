import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-[#00000059] bg-blend-overlay bg-center bg-cover  w-full py-10 px-4 flex flex-col md:flex-row gap-y-10 md:gap-[100px] lg:gap-[200px]"
      style={{ backgroundImage: "url(images/foot.png)" }}
    >
    
      <div className="text-white md:ml-10 list-none flex flex-col gap-4 w-full md:w-1/3 text-[15px]">
        <h1 className="text-[20px] font-semibold">Navigation</h1>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Academics</a></li>
        <li><a href="#">Administration</a></li>
        <li><a href="#">News & Events</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact Us</a></li>
      </div>

      
      <div className="text-white flex flex-col gap-5 w-full md:w-1/3">
        <h1 className="text-[20px] font-semibold">Get Updates</h1>
        <p className="text-[15px]">
          On March 25, 2025, the Rotary Club of Victoria Falls officially handed
          over a new borehole, solar-powered pump, and agricultural equipment to
          Chinotimba Primary School—ensuring reliable access to water and empowering
          hands-on farming initiatives for students.
        </p>

        <form className="flex flex-col gap-3">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border border-white bg-Helenmaroon rounded-[10px] text-white h-[38px] px-4"
            required
          />
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              className="border border-white bg-Helenmaroon rounded-[10px] text-white h-[38px] px-4 w-full sm:w-[60%]"
              required
            />
            <button
              type="submit"
              className="border border-white bg-Helenmaroon rounded-[10px] text-white h-[38px] px-4 w-full sm:w-[40%]"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="flex gap-12 mt-4 justify-center" >
          <a href="#"><img src="images/fb.png" alt="Facebook" className="w-6 h-6 md:w-[40px]  md:h-[40px]" /></a>
          <a href="#"><img src="images/ig.png" alt="Instagram" className="w-6 h-6 md:w-[40px]  md:h-[40px]" /></a>
          <a href="#"><img src="images/twit.png" alt="Twitter" className="w-6 h-6 md:w-[40px]  md:h-[40px]" /></a>
          <a href="#"><img src="images/in.png" alt="LinkedIn" className="w-6 h-6 md:w-[40px]  md:h-[40px]" /></a>
        </div>
      </div>

      
      <div className="flex flex-col text-white gap-4 w-full md:w-1/3">
        <h1 className="text-[20px] font-semibold">Send us a message</h1>
        <p className="text-[15px]">+263 788 220 444</p>
        <p className="text-[15px] leading-relaxed">
          Have a question, suggestion, or need assistance? We’re here to help! Feel free to reach us.
        </p>
        <img
          src="images/Chinotimba-primary 1.png"
          alt="School Logo"
          className="w-[100px] h-[100px] object-contain mt-2"
        />
      </div>
    </div>
  );
};

export default Footer;
