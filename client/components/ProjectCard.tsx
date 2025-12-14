import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
  language?: string | null;
  stars?: number;
  gradientClass?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  url,
  language,
  stars,
  gradientClass,
}: ProjectCardProps) {
  const linkHref = url || `/projects/${id}`;
  const isExternalLink = url ? true : false;

  return (
    <a
      href={linkHref}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className="w-full rounded-[20px] overflow-hidden border-[1.5px] border-black/10 relative transition-all hover:shadow-lg no-underline"
    >
      <div className="px-5 pt-5 pb-4 rounded-[20px] group">
        <div
          className={`relative w-full h-[200px] border border-black/10 rounded-[20px] overflow-hidden flex items-center justify-center ${
            image ? "bg-gradient-to-br from-slate-300 to-slate-400" : `bg-gradient-to-br ${gradientClass || "from-slate-300 to-slate-400"}`
          }`}
        >
          {image ? (
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          ) : (
            <div className="text-center px-4">
              <h4 className="text-white font-semibold text-lg line-clamp-3">
                {title}
              </h4>
            </div>
          )}
        </div>
      </div>
      <div className="px-7 pb-7">
        <h3 className="text-[24px] font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-[16px] line-clamp-2">{description}</p>

        {(language || stars !== undefined) && (
          <div className="flex items-center gap-3 mt-3 mb-4">
            {language && (
              <span className="text-sm text-gray-500">{language}</span>
            )}
            {stars !== undefined && (
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {stars}
              </span>
            )}
          </div>
        )}

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
    </a>
  );
}
