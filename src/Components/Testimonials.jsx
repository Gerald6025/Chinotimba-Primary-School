import React from "react";

const Testimonials = () => {
  const Tests = [
    {
      url: "src/assets/leeroy.png",
      title: "Leeroy Dube",
      sub: "Marketer",
      body: "“Watching children develop from pre-school to university has been deeply fulfilling.”",
      id: 1,
    },
    {
      url: "src/assets/helen.png",
      title: "Helen Dube",
      sub: "Product Designer",
      body: " “Our pupils raised over R13 000 to help a schoolmate undergo a life‑saving heart operation — even the youngest learners contributed.” ",
      id: 2,
    },
    {
      url: "src/assets/apprue.png",
      title: "Approved ",
      sub: "  UX Designer",
      body: "  “The solar‑powered borehole and agricultural equipment have empowered our students with sustainable learning tools and fresh opportunities.”",
      id: 3,
    },
    {
      url: "src/assets/desire.png",
      title: "Desire",
      sub: "Marketer",
      body: "  “Former students based in the UK donated curriculum-aligned textbooks worth nearly Z$300 000, boosting our teaching resources and academic preparedness.”",
      id: 4,
    },
  ];

  return (
    <div>
      <div className="text-center items-center justify-center flex  flex-col">
        <h1 className="w-[250px] h-[34px] text-[30px] ">Testimonials</h1>
        <hr className=" bg-Helenmaroon w-[170px] h-[3px] mt-3" />
      </div>

      <div className=" flex items-center  flex-wrap   py-20 gap-5 justify-center ">
        {Tests.map((Test) => (
          <div
            className=" 
"
          >
            <div className="  border-[1px] rounded-[10px] border-Helenmaroon w-[500px] h-[200px] px-3 flex gap-7">
              <div className="mt-10">
                <img
                  src={Test.url}
                  alt=""
                  className=" rounded-full w-[100px] h-[100px] object-cover"
                />
              </div>
              <div className="flex flex-col  mt-10">
                <h1 className=" text-[20px] w-[114px] h-[20px]  ">
                  {Test.title}
                </h1>
                <h3 className="mt-2">{Test.sub}</h3>

                <p className="w-[297px] h-[55px] text-[12px] mt-5">
                  {Test.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
