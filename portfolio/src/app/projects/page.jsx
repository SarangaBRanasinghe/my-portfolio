
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projectList } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">All Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="relative h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-white group-hover:text-blue-400 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
