import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [navIsOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => setIsNavOpen(!navIsOpen);

  const navItems = [
    { id: 1, text: "About Me" },
    { id: 2, text: "Services" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Portfolio" },
    { id: 5, text: "Contacts" },
  ];

  return (
    <div className="bg-[#170550] sticky top-0 text-white">
      <div className="flex justify-between items-center py-4 px-6 md:px-24">
        {/* Logo */}
        <div className="text-3xl font-bold">YemScript</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-xl">
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <a
                href={`#${navItem.text.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-transparent hover:bg-orange-800 px-4 py-2 rounded"
              >
                {navItem.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div
          onClick={handleNavToggle}
          className="block md:hidden cursor-pointer"
          aria-label={
            navIsOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {navIsOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </div>

        {/* Mobile Nav */}
        <ul
          className={`fixed md:hidden left-0 top-0 bg-[#31065A] border-r border-gray-900 transition-transform duration-500 ${
            navIsOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="text-3xl font-bold bg-[#170550] w-full py-4 px-6">
            YemScript
          </div>
          {navItems.map((navItem) => (
            <li key={navItem.id} className="px-6 py-2">
              <a
                href={`#${navItem.text.toLowerCase().replace(/\s+/g, "-")}`}
                className="block bg-transparent hover:bg-orange-800 w-full text-left px-4 py-2 rounded"
              >
                {navItem.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
