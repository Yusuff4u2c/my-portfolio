const Skills = () => {
  return (
    <div className="bg-[#170550] text-white" id="skills">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-[40px] font-semibold">
          My <span className="text-[#F86F03]">Skills</span>{" "}
        </h1>
        <div className=" flex flex-col py-20 gap-8">
          <div className="flex gap-8 items-center">
            <h1 className=" w-[90px] font-semibold text-[22px]">HTML</h1>
            <div className="bg-[#43366A] flex justify-start rounded-2xl items-center w-full h-5">
              <div className="bg-[#F86F03] w-[98%] ms-1 rounded-2xl h-[10px]"></div>
            </div>
            <h1>90%</h1>
          </div>
          <div className="flex gap-8 items-center ">
            <h1 className="w-[90px] font-semibold text-[22px]">CSS</h1>
            <div className="bg-[#43366A] flex justify-start rounded-2xl items-center w-full h-5">
              <div className="bg-[#F86F03] w-[95%] ms-1 rounded-2xl h-[10px]"></div>
            </div>
            <h1>95%</h1>
          </div>
          <div className="flex gap-8 items-center ">
            <h1 className="w-[90px] font-semibold text-[22px]">Tailwind</h1>
            <div className="bg-[#43366A] flex justify-start rounded-2xl items-center w-full h-5">
              <div className="bg-[#F86F03] w-[92%] ms-1 rounded-2xl h-[10px]"></div>
            </div>
            <h1>92%</h1>
          </div>
          <div className="flex gap-8 items-center ">
            <h1 className="w-[90px] font-semibold text-[22px]">React</h1>
            <div className="bg-[#43366A] flex justify-start rounded-2xl items-center w-full h-5">
              <div className="bg-[#F86F03] w-[85%] ms-1 rounded-2xl h-[10px]"></div>
            </div>
            <h1>85%</h1>
          </div>
          <div className="flex gap-8 items-center ">
            <h1 className="w-[90px] font-semibold text-[22px]">Javascript</h1>
            <div className="bg-[#43366A] flex justify-start rounded-2xl items-center w-full h-5">
              <div className="bg-[#F86F03] w-[80%] ms-1 rounded-2xl h-[10px]"></div>
            </div>
            <h1>80%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
