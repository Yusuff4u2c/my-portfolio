import BannerImg from "../assets/images/banner-image.png";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "./button";

const Banner = () => {
  return (
    <div className="bg-[#31065A] ">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center">
          <div className="">
            <h1 className="text-[#F86F03] text-3xl font-bold">Hi it's me</h1>
            <h1 className="text-6xl text-white font-bold">Olagunju Adeyemi</h1>
            <h1 className="text-4xl font-bold">
              {" "}
              <span className="text-white "> And I'm a</span>{" "}
              <span className="text-[#F86F03]">Frontend Developer</span>{" "}
            </h1>
            <p className="text-white text-xl">
              Lorem ipsum dolor, sit consectetur adipisicing elit. eos <br />{" "}
              odio debitis deserunt minus distinctio ad dignissimos nostrum.
            </p>
            <div className="flex mt-4 gap-4 text-white">
              <FaFacebook />
              <FaLinkedin />
              <FaGithub />
              <FaInstagram />
            </div>
            <Button className="bg-[#F86F03] mt-4 font-bold text-lg text-white">
              {" "}
              Download CV
            </Button>
          </div>
          <div>
            <img src={BannerImg} alt="" className="w-[577px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
