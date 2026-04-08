import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { projects, services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Inicio | Andrés Morales',
  description: 'Consultor Técnico especializado en UX/UI minimalista, automatización con n8n/Make y desarrollo web con Next.js. Transformo ideas complejas en soluciones digitales precisas.',
  openGraph: {
    title: 'Andrés Morales | Consultor Técnico',
    description: 'Transformo ideas complejas en soluciones digitales precisas. Especializado en UX/UI minimalista y automatización inteligente.',
    url: 'https://andresmorales.com.co',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
              Servicios
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Soluciones diseñadas para escalar tu negocio con precisión y automatización
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 bg-neutral-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Una selección de trabajos recientes en desarrollo web y automatización
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
            ¿Hablamos?
          </h2>
          <p className="text-neutral-400 mb-8">
            Si tienes un proyecto en mente o simplemente quieres conversar sobre
            automatización y diseño, agendemos una llamada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://calendar.app.google/NHF1ScCWjh4WJaey6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Agendar Llamada
            </a>
            <a
              href="tel:+573245425387"
              className="inline-flex items-center gap-2 px-8 py-3 border border-neutral-700 text-neutral-300 rounded-lg font-medium hover:bg-neutral-800/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +57 324 5425387
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:contacto@andresmorales.com.co"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              contacto@andresmorales.com.co
            </a>
            <span className="text-neutral-700">·</span>
            <a
              href="https://www.linkedin.com/in/andresmoralesc1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
