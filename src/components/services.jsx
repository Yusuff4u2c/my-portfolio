import Web from "../assets/images/web.svg";
import Mobile from "../assets/images/mobile-alt.svg";
import Group from "../assets/images/group.svg";
const Card = ({ src, title, desc }) => {
  return (
    <div className="flex flex-col justify-center h-[500px] md:h-[550px] items-center text-[#170550] bg-white p-8 rounded-2xl">
      <img className="w-14" src={src} alt="" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-center text-lg">{desc}</p>
    </div>
  );
};
const Services = () => {
  return (
    <div className="bg-[#31065A] text-white" id="services">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-[40px] font-semibold">
          My <span className="text-[#F86F03]">Services</span>{" "}
        </h1>
        <div className="flex flex-col px-12 md:flex-row justify-between gap-6 items-center my-10 ">
          <Card
            src={Web}
            title="Web Development"
            desc={`Transform your vision into reality with custom frontend solutions tailored to your unique requirements. From responsive layouts to interactive elements, I specialize in crafting websites that not only look great but also offer seamless user experiences across devices. Using the latest technologies and best practices, I ensure your website stands out in the digital landscape and leaves a lasting impression on your audience.`}
          />
          <Card
            src={Mobile}
            title="User Interface Design"
            desc={`Elevate your brand's identity and enhance user engagement with intuitive and visually appealing interfaces. Through a meticulous design process, I create interfaces that prioritize usability, accessibility, and aesthetic harmony. Whether you need a complete redesign or refinements to your existing interface, I leverage my expertise in design principles and industry trends to deliver interfaces that captivate and delight your users.`}
          />
          <Card
            src={Group}
            title="Graphic Design & Branding"
            desc={`Build a strong brand presence and convey your message effectively with captivating graphic design solutions. From logo design and brand identity development to marketing collateral and digital assets, I offer comprehensive graphic design services that align with your brand's ethos and objectives. By combining creativity with strategic thinking, I help you establish a cohesive visual identity that resonates with your target audience and sets you apart from the competition.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
