import Yemi from "../assets/images/yemi.jpg";
import Button from "./button";

const About = () => {
  return (
    <div className="bg-[#170550] text-white " id="about">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-[40px] font-semibold">
          About <span className="text-[#F86F03]">Me</span>{" "}
        </h1>
        <div className="flex gap-32 mt-10 items-center ">
          <div>
            <img src={Yemi} alt="" className="w-[360px] h-[410px] rounded-xl" />
          </div>
          <div className="flex flex-col gap-6 items-start">
            <h1 className="text-3xl font-semibold">
              Frontend Developer & <br />
              Graphic Designer
            </h1>
            <p className="line-clamp-4 text-lg fonst-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              reiciendis, quas <br /> voluptatum facere quam iusto itaque
              sapiente dolor provident aspernatur <br /> unde, suscipit illum,
              velit similique animi iste corporis repellendus veritatis <br />{" "}
              minus voluptas. Sunt, eligendi. Praesentium explicabo facere quo
              ad earum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              reiciendis, quas <br /> voluptatum facere quam iusto itaque
              sapiente dolor provident.
            </p>
            <Button className="bg-white font-semibold text-lg text-[#461959]">
              Read More...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
