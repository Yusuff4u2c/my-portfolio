// import Logo from "../assets/images/logo.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

// import Button from "./button";

const NavBar = () => {
  const [navIsOpen, setIsNavOpen] = useState(false);
  function handleNavToggle() {
    setIsNavOpen(!navIsOpen);
  }
  const navItems = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Services" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Portfolio" },
    { id: 5, text: "Contacts" },
  ];
  return (
    <div className="bg-[#170550] text-white">
      <div className="flex justify-between items-center py-[15px] mx-24">
        <button className="text-3xl ms-[-40px] md:ms-0 font-bold">
          YemScript
        </button>
        <ul className=" hidden md:flex gap-6 text-xl ">
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <button className="bg-transparent hover:bg-orange-800 p-2 rounded">
                {navItem.text}
              </button>
            </li>
          ))}
        </ul>

        <div onClick={handleNavToggle} className="block md:hidden">
          {navIsOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        <ul
          className={
            navIsOpen
              ? "fixed md:hidden left-0 top-0 w-[48%] h-full  border-r border-r-gray-900 bg-[#31065A] ease-in-out duration-500"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          <button className="text-3xl font-bold bg-[#170550] w-full py-4">
            YemScript
          </button>

          {navItems.map((navItem) => (
            <li className="ps-12 " key={navItem.id}>
              <button className="bg-transparent hover:bg-orange-800 w-full text-left p-2 rounded">
                {navItem.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
