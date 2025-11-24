import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${id}`}
      className="w-full rounded-[20px] overflow-hidden border-[1.5px] border-black/10 relative transition-all hover:shadow-lg"
    >
      <div className="px-5 pt-5 pb-4 rounded-[20px] group">
        <div className="relative w-full h-[200px] border border-black/10 rounded-[20px] overflow-hidden bg-gradient-to-br from-slate-300 to-slate-400">
          <div className="w-full h-full"></div>
        </div>
      </div>
      <div className="px-7 pb-7">
        <h3 className="text-[24px] font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-[16px] line-clamp-2">{description}</p>
        <button className="mt-5 bg-gray-100 hover:bg-gray-200 flex items-center rounded-[14px] px-[24px] py-[14px] text-[16px] font-normal text-black text-start no-underline transition-all duration-500 group">
          <span className="flex items-center group-hover:pr-2 font-medium text-[15px] transition-all duration-300">
            View Project
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
      </div>
    </Link>
  );
}
