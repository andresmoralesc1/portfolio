'use client';

import { useState } from 'react';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { projects } from '@/lib/data';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'automation', label: 'Automatización' },
  { id: 'ui', label: 'UI/UX' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Portfolio
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Proyectos seleccionados que destacan mi experiencia en desarrollo web,
            automatización y diseño de interfaces.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-neutral-500">
              No hay proyectos en esta categoría por el momento.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
