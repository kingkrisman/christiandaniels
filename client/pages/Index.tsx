import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="bg-white">
      <Header />

      <div className="fixed top-0 bottom-0 w-full pointer-events-none">
        <div className="relative mx-auto max-w-[53rem] h-full">
          <div className="absolute left-0 top-0 h-screen w-[1px] bg-black/10"></div>
          <div className="absolute right-0 top-0 h-screen w-[1px] bg-black/10"></div>
        </div>
      </div>

      <main className="flex flex-col relative items-center mx-auto">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
