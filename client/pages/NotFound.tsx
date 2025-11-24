import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

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
        <div className="w-full max-w-[53rem] p-6 flex flex-col px-[1.5rem] md:px-[8rem] items-center justify-center gap-[25px] pb-[2rem] md:pb-[3rem] min-h-[60vh]">
          <h1 className="text-[72px] md:text-[120px] font-bold text-black">
            404
          </h1>
          <h2 className="text-[28px] md:text-[42px] font-bold text-black text-center">
            Oops! Page not found
          </h2>
          <p className="text-[16px] text-gray-600 text-center max-w-[500px]">
            The page you're looking for doesn't exist. It might have been moved
            or deleted.
          </p>
          <Link
            to="/"
            className="mt-6 bg-black text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 duration-300 transition-all hover:px-[28px]"
          >
            Return to Home
          </Link>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default NotFound;
