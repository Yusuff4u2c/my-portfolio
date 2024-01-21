import ImgOne from "../assets/images/rectangle-1.png";
import ImgTwo from "../assets/images/rectangle-2.png";
import ImgThree from "../assets/images/rectangle-3.png";
import ImgFour from "../assets/images/rectangle-4.png";
import ImgFive from "../assets/images/rectangle-5.png";
import ImgSix from "../assets/images/rectangle-6.png";
import ImgSeven from "../assets/images/rectangle-7.png";
import ImgEight from "../assets/images/rectangle-8.png";
const Portfolio = () => {
  return (
    <div className="bg-[#31065A] text-white " id="portfolio">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-[40px] font-semibold">
          Portfolio
        </h1>
        <div className="flex flex-col justify-between gap-6 items-center my-10 ">
          <div className="flex gap-4">
            <div>
              <img src={ImgOne} alt="" />
            </div>
            <div>
              <img src={ImgTwo} alt="" />
            </div>
            <div>
              <img src={ImgThree} alt="" />
            </div>
            <div>
              <img src={ImgFour} alt="" />
            </div>
          </div>
          <div className="flex gap-4">
            {" "}
            <div>
              {" "}
              <img src={ImgFive} alt="" />
            </div>
            <div>
              <img src={ImgSix} alt="" />
            </div>
            <div>
              {" "}
              <img src={ImgSeven} alt="" />
            </div>
            <div>
              <img src={ImgEight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
