export default function About() {
  return (
    <div className="w-full max-w-[53rem] p-6 flex flex-col py-[100px] md:py-[158px] px-[1.5rem] md:px-[8rem] items-start gap-[25px] mt-[40px]">
      <h2 className="text-[25px] md:text-[32px] font-bold tracking-tight leading-tight text-black">
        About
      </h2>

      <div className="flex flex-col gap-6">
        <p className="text-[16px] font-normal md:leading-relaxed text-gray-600">
          I like to craft solid and scalable products with exceptional user
          experiences, focusing on innovation and problem-solving across
          various industries.
        </p>

        <p className="text-[16px] font-normal md:leading-relaxed text-gray-600">
          I'm Robinson Honour, a 19-year-old Nigerian software developer, with
          7.5+ years of experience in web development, app development,
          robotics, cloud computing, and game development. I specialize in
          building robust applications, cloud platforms, and cutting-edge
          robotics solutions.
        </p>

        <p className="text-[16px] font-normal md:leading-relaxed text-gray-600">
          A self-taught programmer, ranked among the top programmers in Port
          Harcourt, Nigeria, I am an active tech content creator, speaker, and
          mentor passionate about empowering others in tech. I'm also the CEO
          and founder of Pxxl App, a cloud deployment platform for websites,
          APIs, and databases.
        </p>

        <div className="relative w-full h-[250px] mt-8 group">
          <div className="absolute top-0 left-[20%] bg-white px-2 pt-2 -rotate-12 shadow-lg rounded-lg overflow-hidden transition-all duration-500 group-hover:-rotate-12 group-hover:-translate-x-4 group-hover:scale-105">
            <div
              className="w-[200px] h-[200px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F25254e0e171d4040bc8cd6eb90b06e01%2F93bb4c175aaa4f2f86e886b328f0409a)",
              }}
            ></div>
            <span className="text-xs flex justify-center py-1 pb-3 italic text-black w-full text-center">
              @ikwerre-dev
            </span>
          </div>

          <div className="absolute top-10 right-[20%] bg-white px-2 pt-2 rotate-12 shadow-lg rounded-lg overflow-hidden transition-all duration-500 group-hover:rotate-12 group-hover:translate-x-4 group-hover:scale-105">
            <div
              className="w-[200px] h-[200px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F25254e0e171d4040bc8cd6eb90b06e01%2F742561e7795445f8a31724eb45a662b2)",
              }}
            ></div>
            <span className="text-xs flex justify-center py-1 pb-3 italic text-black w-full text-center">
              @codewithhonour
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
