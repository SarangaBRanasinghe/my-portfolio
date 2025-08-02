export default function Projects() {
  const projectList = [
    {
      title: 'MyPortfolio',
      description: 'Personal site built with Next.js and Tailwind.',
      tech: 'Next.js, Tailwind CSS',
      link: '#',
    },
    {
      title: 'TaskTracker',
      description: 'A full-stack todo app with auth and DB.',
      tech: 'React, Node.js, MongoDB',
      link: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 text-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:scale-[1.03] transition-transform"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <p className="text-sm text-gray-600 mb-4">Tech: {project.tech}</p>
              <a href={project.link} className="text-blue-600 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}