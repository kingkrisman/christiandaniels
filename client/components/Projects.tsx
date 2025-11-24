import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "pxxl",
    title: "Da'Sayonce Real Estate",
    description:
      "Leading development of complex web applications using modern tech stack. Specializing in React, Node.js, and cloud solutions",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F25254e0e171d4040bc8cd6eb90b06e01%2Fef216b9c1dda4ceeb1e20d9d326adf02",
  },
  {
    id: "olamide",
    title: "Olamide's Tour Website",
    description:
      "Official site for Nigerian Musician: Olamide (Badoo), featuring tour schedules, ticket purchases, and event information",
  },
  {
    id: "uncutxtra-vote",
    title: "Uncutxtra Awards Voting",
    description: "Official voting platform for UNCUTXTRA Award Night 4.0",
  },
  {
    id: "myticketseller",
    title: "Myticketseller",
    description:
      "Ticket selling platform enabling users to buy and sell tickets for events, concerts, and performances",
  },
];

export default function Projects() {
  return (
    <div className="w-full max-w-[53rem] flex flex-col pt-[58px] px-[1.5rem] items-center gap-[25px] md:gap-[25px]">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-[32px] text-center font-bold tracking-tight leading-tight text-black">
          Here's What I've Been Up To.
        </h2>
      </div>

      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}

        <div className="col-span-1 md:col-span-2 w-full flex justify-center">
          <Link to="/projects">
            <button className="mt-4 bg-black hover:bg-gray-900 flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-white text-start no-underline transition-all duration-500 group">
              <span className="flex items-center group-hover:pr-2 font-medium text-[16px] transition-all duration-300">
                View All
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right ml-2 w-5 h-5"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
