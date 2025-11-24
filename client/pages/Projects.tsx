import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const allProjects = [
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
  {
    id: "project-5",
    title: "Coming Soon",
    description: "Another exciting project in the works...",
  },
  {
    id: "project-6",
    title: "Coming Soon",
    description: "Another exciting project in the works...",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <Header />

      <div className="fixed top-0 bottom-0 w-full pointer-events-none">
        <div className="relative mx-auto max-w-[53rem] h-full">
          <div className="absolute left-0 top-0 h-screen w-[1px] bg-black/10"></div>
          <div className="absolute right-0 top-0 h-screen w-[1px] bg-black/10"></div>
        </div>
      </div>

      <main className="flex flex-col relative items-center mx-auto pt-[150px] md:pt-[188px]">
        <div className="w-full max-w-[53rem] p-6 flex flex-col px-[1.5rem] md:px-[8rem] items-start gap-[25px] pb-[2rem] md:pb-[3rem]">
          <h1 className="text-[42px] font-bold tracking-tight leading-tight text-black">
            All Projects
          </h1>
          <p className="text-[16px] text-gray-600">
            Here's a collection of projects I've worked on and built.
          </p>
        </div>

        <div className="w-full max-w-[53rem] flex flex-col px-[1.5rem] md:px-[8rem] items-center gap-[25px] py-[58px]">
          <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {allProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
