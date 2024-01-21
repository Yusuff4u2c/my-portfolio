import Logo from "../assets/images/logo.jpg";
import Button from "./button";
const NavBar = () => {
  return (
    <div className="bg-[#170550] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center py-[14px]">
          <h1 className="text-2xl">YemTech</h1>
          <ul className="flex gap-6 text-lg">
            <a href="" className="hover:text-[#F86F03]">
              Home
            </a>
            <a href="#about">About Me</a>
            <a href="#services">Services</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </ul>
          <Button className=" bg-white font-semibold text-[#461959]">
            {" "}
            Hire Me
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
