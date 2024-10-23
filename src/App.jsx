import NavBar from "./components/navbar";
// import { useState } from "react";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

const Footer = () => {
  return (
    <div className="bg-[#31065A] text-white ">
      <div className="px-12 mx-auto py-12">
        <h1>Copywrite & Copy : 2023 | All Right Reserved by YemScript</h1>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="wi">
      <NavBar />
      <Banner />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
