import React from "react";

const ConBanner = () => {
  return (
    <div>
      <div className="flex justify-evenly  flex-wrap  h-140  bg-Helenmaroon text-white">
        <div>
          <h1
            className="text-[40px] w-[271px] h-[40px] pt-40 
          "
          >
            <h1>Contact Us</h1>
          </h1>

          <p className="text-[16px] w-[601px] h-[56px] mt-20">
            At Chinotimba Primary School, we value open communication with
            parents, guardians, and the community. Whether you have a question,
            would like to enroll your child, or want to learn more about our
            programs, we welcome you to get in touch. Our team is ready to
            assist you with any inquiries and guide you through the next steps.
            Visit us in Chinotimba Township, call our office, or send us an
            email — we look forward to hearing from you!
          </p>
        </div>

        <div className="flex flex-col  ">
          <img src="images/kii.png" alt="pic" className=" mt-15   " />
        </div>
      </div>
    </div>
  );
};

export default ConBanner;
