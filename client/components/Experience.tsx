interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  tag: string;
}

const experiences: ExperienceItem[] = [
  {
    period: "Sept 2024-Present",
    role: "Founder & CEO",
    company: "Pxxl App",
    tag: "Pxxl App",
  },
  {
    period: "2025-Present",
    role: "Frontend Developer",
    company: "Steadfast Int.",
    tag: "Steadfast Int.",
  },
  {
    period: "2024-Present",
    role: "Fullstack Developer",
    company: "TheEccomerceBoss",
    tag: "TheEccomerceBoss",
  },
  {
    period: "2019-2022",
    role: "Backend Developer",
    company: "OrganStation",
    tag: "OrganStation",
  },
];

export default function Experience() {
  return (
    <div className="w-full max-w-[53rem] flex flex-col pb-[58px] px-[1.5rem] md:px-[8rem] items-center gap-[25px] md:gap-[25px] bg-white dark:bg-black transition-colors">
      <div className="w-full max-w-[53rem] pt-[100px] md:pt-[154px] flex flex-col items-start">
        <div className="flex w-full h-[1px] bg-gray-300 dark:bg-gray-800 mb-[50px] md:mb-[100px] transition-colors"></div>

        <h2 className="text-[22px] font-bold tracking-tight leading-tight text-black dark:text-white mb-[40px] transition-colors">
          Work Experience
        </h2>

        <div className="flex flex-col gap-[30px] w-full">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-[15px] md:gap-0 md:items-center md:justify-between"
            >
              <div className="text-gray-500 dark:text-gray-500 font-medium text-[13px] transition-colors">
                {exp.period}
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[16px] text-black dark:text-white md:text-gray-600 dark:md:text-gray-400 font-medium transition-colors">
                  {exp.role} at
                </div>
                <div className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-md transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                    <svg
                      width="5"
                      height="5"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 0L9.33013 2.5V7.5L5 10L0.669873 7.5V2.5L5 0Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span>{exp.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full h-[1px] bg-gray-300 dark:bg-gray-800 my-[50px] md:my-[100px] transition-colors"></div>
      </div>
    </div>
  );
}
