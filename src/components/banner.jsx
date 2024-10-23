import BannerImg from "../assets/images/banner-image.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "./button";

const Banner = () => {
  return (
    <div className="bg-[#31065A] ">
      <div className="flex flex-col md:flex-row items-center px-12 md:px-14 py-8 md:py-0">
        <div className="flex flex-col md:items-start  items-center md:w-[50%]">
          <h1 className="text-[#F86F03] text-2xl md:text-3xl font-bold">
            Hi! It's me;
          </h1>
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Olagunju Yusuff Adeyemi.
          </h1>
          <h1 className="text-4xl font-bold">
            <span className="text-white">I'm a</span>{" "}
            <span className="text-[#F86F03]">Frontend Developer</span>
          </h1>
          <p className="text-white text-xl text-start">
            I am dedicated to bringing your digital visions to life. With a keen
            eye for design and a knack for code, I specialize in creating
            stunning and intuitive user interfaces that captivate audiences.
            Explore my portfolio and discover how I can help elevate your online
            presence with bespoke frontend solutions tailored to your needs.
          </p>
          <div className="flex mt-4 gap-4 text-white">
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
          </div>
          <Button className="bg-[rgb(248,3,150)] mt-4 font-bold text-lg text-white">
            Download CV
          </Button>
        </div>
        <div className="hidden md:block">
          <img src={BannerImg} alt="laptop image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
