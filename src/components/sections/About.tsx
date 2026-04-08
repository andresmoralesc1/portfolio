'use client';

import Image from 'next/image';
import { Marquee } from '@/components/ui/Marquee';

const skills = [
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop',
    name: 'Next.js',
    role: 'Framework',
  },
  {
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop',
    name: 'TypeScript',
    role: 'Language',
  },
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    name: 'React',
    role: 'Library',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    name: 'Node.js',
    role: 'Runtime',
  },
  {
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=400&fit=crop',
    name: 'Tailwind CSS',
    role: 'Styling',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop',
    name: 'n8n',
    role: 'Automation',
  },
];

const collaborations = [
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    name: 'Tech Corp',
    role: 'Enterprise Client',
  },
  {
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    name: 'Startup Lab',
    role: 'MVP Development',
  },
  {
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=400&fit=crop',
    name: 'Digital Agency',
    role: 'UI/UX Consultant',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    name: 'E-commerce Brand',
    role: 'Automation Expert',
  },
];

export function About() {
  return (
    <section className="relative w-full overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 text-neutral-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
              <path d="M8 15H7a4 4 0 0 0-4 4v2" />
              <circle cx="10" cy="7" r="4" />
            </svg>
          </div>

          <h1 className="relative mb-4 text-4xl font-medium tracking-tight text-neutral-100 sm:text-5xl">
            Sobre Mí
            <svg
              className="absolute -top-2 -right-8 -z-10 w-24 text-neutral-800"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h1>
          <p className="max-w-2xl text-neutral-400">
            Consultor Técnico con más de 5 años de experiencia transformando ideas
            complejas en soluciones digitales precisas.
          </p>
        </div>

        {/* Skills Marquee */}
        <div className="relative mb-24 w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

          <Marquee className="[--gap:1.5rem]" pauseOnHover speed="slow">
            {skills.map((skill) => (
              <div className="flex w-48 shrink-0 flex-col" key={skill.name}>
                <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-neutral-900">
                  <Image
                    alt={skill.name}
                    className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    height={200}
                    src={skill.image}
                    width={200}
                  />
                  <div className="absolute bottom-0 w-full rounded-lg bg-neutral-900/90 p-3 backdrop-blur-sm">
                    <h3 className="font-semibold text-neutral-100">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-neutral-400">{skill.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bio Section */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-8 text-lg font-medium leading-relaxed text-neutral-300 md:text-xl">
            Me especializo en crear experiencias digitales minimalistas y automatizaciones
            inteligentes que optimizan procesos y mejoran la vida de las personas.
            Cada proyecto es una oportunidad para aprender y crear algo excepcional.
          </p>

          <div className="flex flex-col items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image
                alt="Andrés Morales"
                className="h-full w-full object-cover"
                fill
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-neutral-100">Andrés Morales</p>
              <p className="text-sm text-neutral-400">Consultor Técnico · Bogotá, Colombia</p>
            </div>
          </div>
        </div>

        {/* Collaborations Marquee - Reverse direction */}
        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

          <Marquee className="[--gap:1.5rem]" direction="right" pauseOnHover speed="normal">
            {collaborations.map((collab) => (
              <div className="flex w-56 shrink-0 flex-col" key={collab.name}>
                <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-neutral-900">
                  <Image
                    alt={collab.name}
                    className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
                    height={224}
                    src={collab.image}
                    width={224}
                  />
                  <div className="absolute bottom-0 w-full rounded-lg bg-neutral-900/90 p-3 backdrop-blur-sm">
                    <h3 className="font-semibold text-neutral-100">
                      {collab.name}
                    </h3>
                    <p className="text-sm text-neutral-400">{collab.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
