import Web from "../assets/images/web.svg";
import Mobile from "../assets/images/mobile-alt.svg";
import Group from "../assets/images/group.svg";
const Card = ({ src, title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center text-[#170550] bg-white p-10 gap-4 rounded-2xl">
      <img src={src} alt="" />
      <h1 className="text-3xl font-bold">{title}</h1>
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
        <div className="flex justify-between gap-6 items-center my-10 ">
          <Card
            src={Web}
            title="Web Development"
            desc={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`}
          />
          <Card
            src={Web}
            title="Web Development"
            desc={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
injected
humour`}
          />
          <Card
            src={Web}
            title="Web Development"
            desc={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
injected
humour`}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
