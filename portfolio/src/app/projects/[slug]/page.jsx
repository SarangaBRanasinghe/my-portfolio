import { projectList } from '@/lib/projects';

export async function generateStaticParams() {
  return projectList.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }) {
  const project = projectList.find((p) => p.slug === params.slug);
  if (!project) return <p>Project not found.</p>;

  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img src={project.image} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-lg mb-4">{project.description}</p>
      <a href={project.link} className="text-blue-500 underline" target="_blank">View Project</a>
    </section>
  );
}
