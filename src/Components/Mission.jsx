import React from "react";

const Mission = () => {
  return (
    <div className="flex  justify-evenly gap-5">
      <div>
        <h1 className="w-[250px] h-[34px] text-[30px]">Mission & vision</h1>
        <hr className=" bg-Helenmaroon w-[215px] h-[3px] mt-3" />

        <p className="w-[485px] h-[168px] mt-20">
         “To nurture well‑rounded, confident learners through quality education, practical life skills, and community engagement—equipping every child at Chinotimba Primary School to thrive academically, culturally, and socially.”
{" "}
          <br />
          <br />
          <br />
          “To be a beacon of excellence in primary education—empowering students from diverse backgrounds to reach their fullest potential, embrace cultural heritage, and contribute meaningfully to their communities and beyond.”
        </p>
      </div>

      <div>
        <h1 className="w-[250px] h-[34px] text-[30px]">Our Stats</h1>
        <hr className=" bg-Helenmaroon w-[120px] h-[3px] mt-3" />

        <div className="mt-10 flex flex-col">
          <div className="flex gap-108">
            <p>Student Population</p>
            <img src="98.png" alt="" />
          </div>

          <div>
            <div className="absolute w-[596px] h-[20px]  rounded-[10px] border-[1px] border-Helenmaroon"></div>
            <div className="relative w-[550px] h-[20px]  rounded-[10px] border-[1px] bg-Helenmaroon border-Helenmaroon"></div>
          </div>
        </div>

        <div className="mt-10 flex flex-col">
          <div className="flex gap-79">
            <p>Grade 7 Exam Performance</p>
            <img src="64.png" alt="" />
          </div>

          <div>
            <div className="absolute w-[596px] h-[20px]  rounded-[10px] border-[1px] border-Helenmaroon"></div>
            <div className="relative w-[433px] h-[20px]  rounded-[10px] border-[1px] bg-Helenmaroon border-Helenmaroon"></div>
          </div>
        </div>

        <div className="mt-10 flex flex-col">
          <div className="flex gap-99">
            <p>National Exam Ranking</p>
            <img src="86.png" alt="" />
          </div>

          <div>
            <div className="absolute w-[596px] h-[20px]  rounded-[10px] border-[1px] border-Helenmaroon"></div>
            <div className="relative w-[513px] h-[20px]  rounded-[10px] border-[1px] bg-Helenmaroon border-Helenmaroon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
