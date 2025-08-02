export default function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Git', 'Figma'
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white text-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-gray-200 text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
