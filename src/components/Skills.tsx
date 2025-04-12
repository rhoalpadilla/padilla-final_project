const Skills = () => {
    return (
      <section className="my-12 px-4">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-lg">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">HTML</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">CSS</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">JavaScript</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">React</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Tailwind CSS</span>
        </div>
      </section>
    );
  };

  export default Skills;
  