import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Galcards() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      image: "images/gs1.png",
      title: "School Environment & Infrastructure",
      description:
        "Chinotimba Primary School offers a safe, clean and child-friendly learning environment. Our well-maintained classrooms, functional ICT lab, and spacious outdoor areas support academic and practical learning.",
    },
    {
      image: "images/gs2.png",
      title: "Classroom Learning",
      description:
        "At Chinotimba Primary School, classroom learning is active, inclusive, and learner-focused. Our teachers use interactive methods to engage pupils in subjects such as Mathematics, English, Science, and Shona. With the integration of ICT and CALA projects, learners also explore research, creativity, and real-world problem solving. We strive to create a supportive environment where every child is encouraged to ask questions, think critically, and participate with confidence — building a strong foundation for future success.",
    },
    {
      image: "images/gs3.png",
      title: "Sports & Physical Education",
      description:
        "At Chinotimba Primary School, we believe that a healthy body supports a healthy mind. Our Physical Education and Sports program encourages learners to stay active, build confidence, and develop teamwork skills. Pupils take part in a variety of sports such as football, netball, athletics, and tag rugby, both during regular lessons and inter-house competitions. Through sport, our learners learn discipline, fair play, and resilience — values that strengthen both their bodies and their character.",
    },
    {
      image: "images/gs4.png",
      title: "Agriculture & Sustainability",
      description:
        " agriculture is more than a subject — it’s a way of life. Learners actively engage in cultivating school gardens where they grow vegetables as part of their practical lessons. Powered by a solar-installed borehole, our agriculture program teaches students essential life skills like planting, watering, and environmental care.",
    },
    {
      image: "images/gs5.jpg",
      title: "Community Moments",
      description:
        "Chinotimba Primary School thrives because of the strong bond we share with our community. From parent-teacher meetings and school fundraisers to visits by local partners like the Rotary Club, our school is built on teamwork beyond the classroom. In 2022, our school community united to raise over R13,000 to support a learner in need of medical care — a powerful example of compassion and solidarity",
    },
    {
      image: "images/gs6.png",
      title: "Arts & Culture",
      description:
        "Chinotimba Primary School celebrates Zimbabwean heritage through vibrant art and cultural activities. Our learners take part in traditional dance, music, and visual arts, expressing creativity while preserving local customs. The school proudly participates in cultural events such as World Children’s Day, with our drum-majorettes leading parades and performances.",
    },
  ];

  return (
    <div className="w-full py-10 overflow-hidden">
      <h1 className="text-[30px] pl-10 mb-5">Our Gallery</h1>
      <div className="px-5 overflow-hidden">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="px-2 max-w-full">
              <div
                className="h-[355px] group relative w-full bg-center bg-cover rounded-2xl overflow-hidden"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="bg-[#000000bb] h-full w-full absolute top-0 left-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-[2000ms] ease-in-out flex flex-col justify-center px-10">
                  <h1 className="text-[15px]">{card.title}</h1>
                  <p className="text-[10px] pt-5">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Galcards;
