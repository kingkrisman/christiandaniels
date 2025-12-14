import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to manage state and side effects in your functional components.",
    date: "Dec 10, 2024",
    category: "React",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Building Scalable Web Applications",
    excerpt:
      "Best practices and patterns for building web applications that can grow with your business.",
    date: "Dec 5, 2024",
    category: "Architecture",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "The Future of Web Development",
    excerpt:
      "Exploring emerging technologies and trends that will shape the future of web development.",
    date: "Nov 30, 2024",
    category: "Trends",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "TypeScript Best Practices",
    excerpt:
      "Master TypeScript with these essential best practices and patterns for production code.",
    date: "Nov 25, 2024",
    category: "TypeScript",
    readTime: "7 min read",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="w-full max-w-[53rem] mx-auto p-6 flex flex-col pt-[150px] md:pt-[188px] pb-[2rem] md:pb-[3rem] px-[1.5rem] md:px-[8rem] items-start gap-[25px]">
        <div className="w-full">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 mb-8"
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
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="w-full">
          <h1 className="text-[32px] md:text-[42px] font-bold tracking-tight leading-tight text-black dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-[16px] text-gray-600 dark:text-gray-400">
            Thoughts and insights on web development, design, and technology.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group border border-gray-200 dark:border-gray-800 rounded-[20px] p-6 hover:shadow-lg dark:hover:shadow-xl dark:hover:shadow-white/10 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-[20px] font-semibold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-[16px] text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {post.date}
                </span>
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-2 transition-colors">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
