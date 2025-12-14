import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-[10px] md:top-[25px] w-full z-50 flex justify-center p-4">
      <div className="liquidGlass-wrapper bg-white/50 dark:bg-black/30 rounded-[20px] border border-zinc-200 dark:border-zinc-800 backdrop-blur-md transition-colors">
        <nav className="liquidGlass-text flex items-center gap-1 p-[6px] relative z-10">
          <div className="flex items-center">
            <Link
              to="/"
              className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-300 hover:bg-gray-200/20 dark:hover:bg-white/10 rounded-[15px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Home
              </span>
            </Link>
            <div className="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-800 md:mx-2"></div>
          </div>

          <div className="flex items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-300 hover:bg-gray-200/20 dark:hover:bg-white/10 rounded-[15px]"
              href="https://x.com"
              title="Twitter"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="17"
                width="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
              </svg>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Visit Twitter
              </span>
            </a>
          </div>

          <div className="flex items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-300 hover:bg-gray-200/20 dark:hover:bg-white/10 rounded-[15px]"
              href="https://github.com"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Visit GitHub
              </span>
            </a>
          </div>

          <div className="flex items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-300 hover:bg-gray-200/20 dark:hover:bg-white/10 rounded-[15px]"
              href="/resume.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Download Resume
              </span>
            </a>
            <div className="h-5 w-[1px] bg-zinc-200 dark:bg-zinc-800 md:mx-2"></div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white relative group transition-all duration-300 hover:bg-gray-200/20 dark:hover:bg-white/10 rounded-[15px]"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
            <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {theme === "light" ? "Dark mode" : "Light mode"}
            </span>
          </button>

          <Link
            to="/blog"
            className="bg-black dark:bg-white text-white dark:text-black py-[14px] px-[20px] md:px-[22px] rounded-[14px] text-sm hover:opacity-90 duration-300 transition-all hover:px-[28px] ml-2 md:ml-1"
          >
            <span className="hidden md:flex">My Blog</span>
            <span className="md:hidden">Blog</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
