import Yemi from "../assets/images/yemi.jpg";
import Button from "./button";

const About = () => {
  return (
    <div className="bg-[#170550] text-white " id="about">
      <div className="max-w-6xl mx-auto py-10 flex flex-col">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-3xl md:text-4xl font-semibold">
          About <span className="text-[#F86F03]">Me</span>{" "}
        </h1>
        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between mt-8 ">
          <div className="w-[50%]">
            <img
              src={Yemi}
              alt=""
              className="w-[150px] h-[150px] mx-auto md:w-[360px] md:h-[360px] rounded-xl"
            />
          </div>
          <div className="flex px-12 md:w-[50%] flex-col md:justify-between  items-center md:items-start">
            {/* <h1 className="text-2xl md:text-3xl md:font-semibold">
              Frontend Developer
            </h1> */}
            <p className=" fonst-semibold text-lg">
              Meet Olagunju Adeyemi: Your Frontend Developer and Graphic
              Designer. As a frontend developer and graphic designer, I thrive
              on the intersection of creativity and technology. With a
              background in both design and development, I bring a unique
              perspective to every project, ensuring both aesthetic appeal and
              functional excellence. Driven by a relentless pursuit of
              perfection, I'm committed to pushing the boundaries of web design
              and delivering memorable user experiences that leave a lasting
              impression.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              reiciendis, quas <br /> voluptatum facere quam iusto itaque
              sapiente dolor provident.
            </p> */}
            {/* <Button className="bg-white font-semibold text-lg text-[#461959]">
              Read More...
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
