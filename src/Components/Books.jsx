import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Books = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Subs = [
    { url: "images/Bk1.png", id: 1 },
    { url: "images/Bk2.png", id: 2 },
    { url: "images/Bk3.png", id: 3 },
    { url: "images/Bk4.png", id: 4 },
    { url: "images/Bk 5.png", id: 5 },
    { url: "images/Bk6.jpg", id: 6 },
    { url: "images/Bk7.png", id: 7 },
    { url: "images/Bk8.png", id: 8 },
    { url: "images/Bk9.png", id: 9 },
    { url: "images/Bk10.png", id: 10 },
    { url: "images/Bk11.jpg", id: 11 },
    { url: "images/Bk12.jpg", id: 12 },
  ];

  return (
    <div className="mt-40 ml-10">
      <h1 className="w-[250px] h-[34px] text-[30px]">Subjects Offered</h1>
      <hr className="bg-Helenmaroon w-[215px] h-[3px] mt-3" />

      <div className="mt-10 mr-10">
        <Slider {...settings}>
          {Subs.map((Sub) => (
            <div key={Sub.id} className="px-2">
              <img
                src={Sub.url}
                alt={`Book ${Sub.id}`}
                className="w-[214px] h-[240px] object-cover border-[1px] border-Helenmaroon rounded-[10px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Books;
