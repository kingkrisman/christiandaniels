import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectDetails: Record<
  string,
  { title: string; description: string; fullDescription: string }
> = {
  pxxl: {
    title: "Pxxl App",
    description:
      "Enterprise-grade cloud deployment platform enabling instant deployment of websites, APIs, and databases with zero configuration",
    fullDescription:
      "Pxxl App is a cloud deployment platform I founded that makes it easy to deploy websites, APIs, and databases with just a few clicks. It abstracts away the complexity of cloud infrastructure and provides developers with an intuitive interface to manage their deployments.",
  },
  olamide: {
    title: "Olamide's Tour Website",
    description:
      "Official site for Nigerian Musician: Olamide (Badoo), featuring tour schedules, ticket purchases, and event information",
    fullDescription:
      "A comprehensive tour website for Nigerian musician Olamide, featuring concert schedules, ticket purchasing capabilities, and event information. The site was built with a focus on user experience and accessibility.",
  },
  "uncutxtra-vote": {
    title: "Uncutxtra Awards Voting",
    description: "Official voting platform for UNCUTXTRA Award Night 4.0",
    fullDescription:
      "The official voting platform for UNCUTXTRA Award Night 4.0, handling thousands of votes for various award categories. Built with real-time vote counting and result tracking.",
  },
  myticketseller: {
    title: "Myticketseller",
    description:
      "Ticket selling platform enabling users to buy and sell tickets for events, concerts, and performances",
    fullDescription:
      "A peer-to-peer ticket marketplace allowing users to buy and sell tickets for events, concerts, and performances. The platform handles secure transactions and ticket verification.",
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectDetails[id] : null;

  if (!project) {
    return (
      <div className="bg-white">
        <Header />
        <main className="flex flex-col relative items-center mx-auto pt-[150px] md:pt-[188px]">
          <div className="w-full max-w-[53rem] p-6 flex flex-col px-[1.5rem] md:px-[8rem] items-center gap-[25px] pb-[2rem] md:pb-[3rem] min-h-screen">
            <h1 className="text-[42px] font-bold tracking-tight leading-tight text-black">
              Project Not Found
            </h1>
            <p className="text-[16px] text-gray-600">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-medium mt-4"
            >
              Back to Home
            </Link>
          </div>
          <Footer />
        </main>
      </div>
    );
  }

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
          <Link
            to="/projects"
            className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            Back to Projects
          </Link>

          <div>
            <h1 className="text-[42px] font-bold tracking-tight leading-tight text-black">
              {project.title}
            </h1>
            <p className="text-[16px] text-gray-600 mt-4">
              {project.description}
            </p>
          </div>

          <div className="w-full h-[400px] bg-gradient-to-br from-slate-300 to-slate-400 rounded-[20px] mt-8"></div>

          <div className="mt-8 flex flex-col gap-6">
            <h2 className="text-[28px] font-bold text-black">Overview</h2>
            <p className="text-[16px] text-gray-600 leading-relaxed">
              {project.fullDescription}
            </p>

            <h2 className="text-[28px] font-bold text-black mt-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[16px] text-gray-600">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>

            <h2 className="text-[28px] font-bold text-black mt-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Node.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
