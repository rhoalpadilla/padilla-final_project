import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <header className="text-center py-8 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">My Portfolio</h1>
      </header>
      <main className="max-w-6xl mx-auto p-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-6 bg-gray-200 text-sm text-gray-600 mt-12">
        © 2025 Rho-al Chun T. Padilla. All rights reserved.
      </footer>
    </div>
  );
}
