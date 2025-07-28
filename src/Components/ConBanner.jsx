import React from "react";

const ConBanner = () => {
  return (
    <div className="w-full pb-30 ">
      <div className="flex flex-col md:flex-row justify-between items-center bg-Helenmaroon text-white py-10 md:py-20 px-4 md:px-8 lg:px-16">
        
        <div className="w-full md:w-1/2 lg:w-2/3 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Contact Us
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            At Chinotimba Primary School, we value open communication with
            parents, guardians, and the community. Whether you have a question,
            would like to enroll your child, or want to learn more about our
            programs, we welcome you to get in touch. Our team is ready to
            assist you with any inquiries and guide you through the next steps.
            Visit us in Chinotimba Township, call our office, or send us an
            email — we look forward to hearing from you!
          </p>
        </div>

      
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
          <img 
            src="images/kii.png" 
            alt="School illustration" 
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ConBanner;
