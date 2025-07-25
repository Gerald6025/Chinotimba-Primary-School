import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AA = () => {
  const [trigger, setTrigger] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  if (inView && !trigger) {
    setTrigger(true);
  } else if (!inView && trigger) {
    setTrigger(false);
  }

  const Archives = [
    {
      title: "🏆 Grade 7 Examination Pass Rate",
      perc: 92,
      story: "Chinotimba Primary achieved an impressive 92% pass rate in the 2024 Grade 7 national examinations, exceeding the national average. This reflects the school's strong academic foundation and teaching standards.",
      id: 1,
      bgClass: "bg-Helenmaroon text-white",
    },
    {
      title: "📖 English Language Excellence",
      perc: 88,
      story: "88% of learners scored distinctions or above-average grades in English. This highlights the school's emphasis on literacy, reading comprehension, and effective communication skills.",
      id: 2,
      bgClass: "bg-white text-black",
    },
    {
      title: "➕ Mathematics Mastery",
      perc: 85,
      story: "With 85% of learners scoring above 60% in Mathematics, Chinotimba Primary has demonstrated a strong grasp of numeracy and problem-solving skills across all classes.",
      id: 3,
      bgClass: "bg-Helenmaroon text-white",
    },
  ];

  return (
    <>
      <div className="mt-30 ml-10 h-10">
        <h1 className="w-[400px] h-[30px] text-[30px]">Academic Achievements</h1>
        <hr className="bg-Helenmaroon w-[310px] h-[3px] mt-3" />
      </div>

      <div ref={ref} className="flex justify-evenly flex-wrap gap-10 h-auto mt-10 px-4">
        {Archives.map((archive) => (
          <div
            key={archive.id}
            className={`relative w-[361px] h-[300px] border-Helenmaroon border-[1px] rounded-bl-[10px] rounded-tl-[60px] rounded-br-[60px] rounded-tr-[10px] flex flex-col justify-center items-center mb-32 mt-15 text-center gap-7 p-4 ${archive.bgClass}`}
          >
          
            <div className="absolute top-0 right-0 translate-x-1/2  rotate-y-180  -translate-y-1/2 w-12 h-12 bg-Helenmaroon text-white border-4 border-white rounded-tl-3xl flex justify-center items-center z-50">
              <h1 className="text-3xl">“</h1>
            </div>

            
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-Helenmaroon text-white border-4 border-white rounded-tr-3xl flex justify-center items-center z-50 rotate-180">
              <h1 className="text-3xl">”</h1>
            </div>

            <h3 className="w-[95%] text-[20px]">{archive.title}</h3>
            <h1 className="text-[30px]">
              {trigger ? (
                <CountUp end={archive.perc} duration={4} key={trigger + archive.id} />
              ) : (
                '0'
              )}
              %
            </h1>
            <p className="w-[90%] text-[12px]">{archive.story}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AA;
