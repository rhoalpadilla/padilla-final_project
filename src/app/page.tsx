import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
      <Header />

      {/* Main Content */}
      <main className="relative max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 py-12 space-y-16">
        {/* Welcome text  inbg */}
        <h1 className="absolute top-0 left-1/2 transform -translate-x-1/2 text-[8rem] lg:text-[12rem] font-bold text-[#05fcec] opacity-5 select-none pointer-events-none z-0">
          Welcome!
        </h1>
        <section id="about" className="relative z-10 shadow-md rounded-xl p-6">
          <AboutMe />
        </section>

        <section id="education" className="relative z-10  shadow-md rounded-xl p-6">
          <Education />
        </section>

        <section id="experience" className="relative z-10  shadow-md rounded-xl p-6">
          <Experience />
        </section>

        <section id="skills" className="relative z-10  shadow-md rounded-xl p-6">
          <Skills />
        </section>

        <section id="contact" className="relative z-10  shadow-md rounded-xl p-6">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
