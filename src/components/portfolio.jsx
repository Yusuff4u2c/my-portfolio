import Hushhive from "../assets/images/hushhive.png";
import Store from "../assets/images/store.png";
import Form from "../assets/images/form.png";

import Timer from "../assets/images/timer.png";
import Calc from "../assets/images/calc.png";
import WorkOut from "../assets/images/workout.png";
import InvestCalc from "../assets/images/investment-calc.png";
import Task from "../assets/images/task-manager.png";
// import ImgEight from "../assets/images/rectangle-8.png";

const Portfolio = () => {
  const projects = [
    { img: Hushhive, title: "Hushhive", url: "https://hushhive.yemscript.com" },

    {
      img: Store,
      title: "Simple Ecommerce  ",
      url: "https://yemstore.yemscript.com",
    },
    {
      img: Form,
      title: "Multi Step Form",
      url: "https://complex-form.yemscript.com",
    },
    {
      img: Timer,
      title: "Countdown Timer",
      url: "https://timer-game.yemscript.com",
    },
    {
      img: Calc,
      title: "React Basic Calculator",
      url: "https://react-calculator.yemscript.com",
    },
    {
      img: WorkOut,
      title: "Workout Tracker",
      url: "https://yemfit.yemscript.com",
    },
    {
      img: InvestCalc,
      title: "Investment Calculator",
      url: "https://investment-calc.yemscript.com",
    },
    // {
    //   img: ImgEight,
    //   title: "Project 8",
    //   url: "#",
    // },
    {
      img: Task,
      title: "Task Manager",
      url: "https://task-manager.yemscript.com",
    },
  ];

  return (
    <div className="bg-[#31065A] text-white px-12" id="portfolio">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-[40px] font-semibold">
          Portfolio
        </h1>
        <div className="flex flex-wrap justify-center gap-4 my-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[calc(50%-8px)] md:w-[calc(25%-8px)] mt-8 flex flex-col justify-center items-center" // 2 images per row on mobile, 4 on larger screens
            >
              <h1 className="">{project.title}</h1>
              <a href={project.url}>
                <img
                  src={project.img}
                  alt={`portfolio-${index}`}
                  className="w-full h-[200px] object-fit rounded-lg"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
