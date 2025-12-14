import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

export default function Projects() {
  const [projects, setProjects] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStarredRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/kingkrisman/starred"
        );
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch projects"
        );
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStarredRepos();
  }, []);

  return (
    <div className="w-full max-w-[53rem] flex flex-col pt-[58px] px-[1.5rem] items-center gap-[25px] md:gap-[25px]">
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-[32px] text-center font-bold tracking-tight leading-tight text-black">
          Here's What I've Been Up To.
        </h2>
      </div>

      {loading && (
        <div className="w-full text-center py-12">
          <p className="text-gray-500">Loading projects...</p>
        </div>
      )}

      {error && (
        <div className="w-full text-center py-12">
          <p className="text-red-500">
            Failed to load projects. Please try again later.
          </p>
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <div className="w-full text-center py-12">
          <p className="text-gray-500">No starred projects found.</p>
        </div>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projects.map((project) => {
            const colors = [
              "from-blue-500 to-blue-600",
              "from-purple-500 to-purple-600",
              "from-pink-500 to-pink-600",
              "from-green-500 to-green-600",
              "from-indigo-500 to-indigo-600",
              "from-cyan-500 to-cyan-600",
              "from-emerald-500 to-emerald-600",
              "from-rose-500 to-rose-600",
            ];
            const colorClass = colors[project.id % colors.length];
            return (
              <ProjectCard
                key={project.id}
                id={project.id.toString()}
                title={project.name}
                description={project.description || "No description provided"}
                url={project.html_url}
                language={project.language}
                stars={project.stargazers_count}
                gradientClass={colorClass}
              />
            );
          })}

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
      )}
    </div>
  );
}
