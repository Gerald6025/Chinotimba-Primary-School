import React from "react";

const Why = () => {
  const Cards = [
    {
      url: "images/card1.png",
      title: " Qualified and dedicated teachers",
      body: "Our team of qualified and dedicated teachers is committed to providing quality education, nurturing each learner’s potential with passion, patience, and purpose",
      id: 1,
    },
    {
      url: "images/card 2.png",
      title: "Supportive community and leadership",
      body: "Backed by dedicated leadership and a supportive community, Chinotimba Primary School creates an environment where learners, teachers, and families grow together in unity and purpose",
      id: 2,
    },
    {
      url: "images/card 3.png",
      title: "Strong academic and cultural programs",
      body: 'We are proud to offer strong academic and cultural programs that nurture excellence in the classroom while celebrating the rich heritage and traditions of our community."',
      id: 3,
    },
    {
      url: "images/card 4.png",
      title: "Emphasis on ICT, sports, and life skills",
      body: 'we place strong emphasis on ICT integration, active participation in sports, and the development of essential life skills to ensure every learner is equipped for both academic success and real-world challenges."',
      id: 4,
    },
  ];

  return (
    <div className="mt-60 h-200">
      <h1 className="w-[250px] h-[34px] text-[30px] ml-15">Why Choose Us</h1>
      <hr className=" bg-Helenmaroon w-[215px] h-[3px] mt-3 ml-15" />
      <div className="flex justify-evenly flex-wrap">
        {Cards.map((Card) => (
          <div
            className="h-[350px] w-[290px]  mt-20 border-[1px] border-Helenmaroon rounded-[10px] justify-center items-center flex flex-col gap-2 hover:bg-Helenmaroon hover:text-white hover:shadow-xl shadow-Helenmaroon hover:scale-105 transform transition duration-300 ease-in-out
"
          >
            <img
              src={Card.url}
              alt=""
              className="w-[100px] h-[100px] rounded-full object-cover border-[2px] border-Helenmaroon hover:border-0 "
            />
            <h1 className="w-[220px] h-[17px] text-center text-[15px] ">
              {Card.title}
            </h1>
            <p className="w-[285px] h-[56px] text-center text-[12px] mt-10 ">
              {Card.body}
            </p>
          </div>
        ))}

        <div className="bg-[url(images/cap.jpg)] bg-center bg-cover w-[1268px]  h-[149px] mt-10 ">
          <div className="w-[1268px]  h-[149px] bg-[#640F24D4] flex items-center justify-evenly flex-wrap text-center">
            <div className="flex flex-col ">
              <h1 className="text-white text-[30px]">450</h1>
              <h1 className="text-white text-[30px]">Projects</h1>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-[30px]">250</h1>
              <h1 className="text-white text-[30px]">Advisor</h1>
            </div>
            <div className="flex flex-col ">
              <h1 className="text-white text-[30px]">95%</h1>
              <h1 className="text-white text-[30px]">Satisfaction rate</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
