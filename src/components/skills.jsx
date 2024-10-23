const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="flex gap-6 items-center">
      <h1 className="font-semibold text-xl">{skill}</h1>
      <div className="bg-[#43366A] flex justify-start rounded-2xl items-center w-full h-5">
        <div
          className="bg-[#F86F03] ms-1 rounded-2xl h-[10px]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <h1>{percentage}%</h1>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { skill: "HTML", percentage: 90 },
    { skill: "CSS", percentage: 95 },
    { skill: "Tailwind", percentage: 92 },
    { skill: "React", percentage: 85 },
    { skill: "Javascript", percentage: 80 },
  ];

  return (
    <div className="bg-[#170550] text-white" id="skills">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="px-4 border-b border-white w-fit mx-auto pt-4 text-[40px] font-semibold">
          My <span className="text-[#F86F03]">Skills</span>
        </h1>
        <div className="flex flex-col py-20 gap-8 px-12">
          {skills.map(({ skill, percentage }) => (
            <SkillBar key={skill} skill={skill} percentage={percentage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
