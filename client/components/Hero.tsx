import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="w-full max-w-[53rem] p-6 flex flex-col pt-[150px] md:pt-[188px] pb-[2rem] md:pb-[3rem] px-[1.5rem] md:px-[8rem] items-start gap-[25px] mt-[40px]">
      <div className="animate-fade-in">
        <img
          alt="Profile picture"
          width="160"
          height="160"
          src="https://cdn.builder.io/api/v1/image/assets%2F25254e0e171d4040bc8cd6eb90b06e01%2F93bb4c175aaa4f2f86e886b328f0409a"
          className="rounded-full aspect-square object-cover"
        />
      </div>

      <div className="text-start">
        <h1 className="text-[26px] md:text-[42px] font-bold tracking-tight leading-tight text-black mb-2">
          Hey, I'm Robinson.
        </h1>
        <h2 className="text-[26px] md:text-[42px] font-bold tracking-tight leading-tight text-black">
          Software Engineer
        </h2>
        <p className="text-[16px] text-gray-600 text-start mt-[25px]">
          Creating innovative solutions and captivating designs.
          <br />
          University student by day, visionary creator by night.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap">
        <button className="bg-black text-white py-[14px] px-[24px] rounded-[14px] text-[16px] hover:opacity-90 duration-300 transition-all hover:px-[28px]">
          Hire Me!
        </button>
        <div className="flex items-center rounded-[100px] text-[16px] gap-2 px-[24px] py-[14px] bg-green-100 text-green-700">
          <div className="w-2 h-2 bg-green-700 rounded-full"></div>
          <span className="hidden md:flex">Available for new project</span>
          <span className="md:hidden">Available</span>
        </div>
      </div>
    </div>
  );
}
