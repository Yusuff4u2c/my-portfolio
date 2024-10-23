import ImgOne from "../assets/images/rectangle-1.png";
import ImgTwo from "../assets/images/rectangle-2.png";
import ImgThree from "../assets/images/rectangle-3.png";
import ImgFour from "../assets/images/rectangle-4.png";
import ImgFive from "../assets/images/rectangle-5.png";
import ImgSix from "../assets/images/rectangle-6.png";
import ImgSeven from "../assets/images/rectangle-7.png";
import ImgEight from "../assets/images/rectangle-8.png";

const Portfolio = () => {
  const images = [
    ImgOne,
    ImgTwo,
    ImgThree,
    ImgFour,
    ImgFive,
    ImgSix,
    ImgSeven,
    ImgEight,
  ];

  return (
    <div className="bg-[#31065A] text-white px-12" id="portfolio">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-[40px] font-semibold">
          Portfolio
        </h1>
        <div className="flex flex-wrap justify-center gap-4 my-10">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[calc(50%-8px)] md:w-[calc(25%-8px)]" // 2 images per row on mobile, 4 on larger screens
            >
              <img src={image} alt={`portfolio-${index}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
