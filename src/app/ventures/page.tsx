import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ventures } from '@/lib/ventures';

export const metadata: Metadata = {
  title: 'Ventures | Andrés Morales',
  description: 'Proyectos emprendedores con impacto social: Clean Bathrooms, GPS Street Sellers, Reforestation as a Service, y más. Invierte en el futuro.',
};

const categories = {
  social: { label: 'Impacto Social', color: 'bg-green-900/30 text-green-400 border-green-800' },
  tech: { label: 'Tecnología', color: 'bg-blue-900/30 text-blue-400 border-blue-800' },
  food: { label: 'Alimentación', color: 'bg-orange-900/30 text-orange-400 border-orange-800' },
  culture: { label: 'Cultura', color: 'bg-purple-900/30 text-purple-400 border-purple-800' },
};

const statuses = {
  concept: { label: 'Concepto', color: 'bg-neutral-800 text-neutral-400' },
  development: { label: 'En Desarrollo', color: 'bg-blue-900/50 text-blue-300' },
  'seeking-funding': { label: 'Buscando Inversión', color: 'bg-green-900/50 text-green-300' },
};

export default function VenturesPage() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Ventures
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Proyectos emprendedores con impacto social y ambiental.
            Transformando ideas en realidades que generan cambio.
          </p>
        </div>

        {/* Featured Venture */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-video md:aspect-auto relative">
                <Image
                  src={ventures[4].image}
                  alt={ventures[4].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 w-fit ${categories[ventures[4].category].color}`}>
                  {categories[ventures[4].category].label}
                </span>
                <h2 className="text-3xl font-bold text-neutral-100 mb-3">
                  {ventures[4].title}
                </h2>
                <p className="text-neutral-400 mb-6">
                  {ventures[4].description}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <p className="text-sm text-neutral-500">Inversión</p>
                    <p className="text-lg font-semibold text-neutral-100">{ventures[4].investment}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statuses[ventures[4].status].color}`}>
                    {statuses[ventures[4].status].label}
                  </span>
                </div>
                <Link
                  href={`/ventures/${ventures[4].id}`}
                  className="inline-block px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                >
                  Ver Proyecto
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* All Ventures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture) => (
            <Link
              key={venture.id}
              href={`/ventures/${venture.id}`}
              className="group"
            >
              <article className="h-full flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-colors">
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={venture.image}
                  alt={venture.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Category & Status */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium border ${categories[venture.category].color}`}>
                    {categories[venture.category].label}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statuses[venture.status].color}`}>
                    {statuses[venture.status].label}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                  {venture.title}
                </h3>
                <p className="text-sm text-neutral-400 line-clamp-2 mb-4 flex-1">
                  {venture.description}
                </p>

                {/* Investment */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <div>
                    <p className="text-xs text-neutral-500">Inversión</p>
                    <p className="text-sm font-semibold text-neutral-300">{venture.investment}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center py-16 border-t border-neutral-800">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">
            ¿Interesado en invertir?
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Todos estos proyectos buscan capital para lanzarse o escalar.
            Contáctame para recibir información detallada sobre cualquier venture.
          </p>
          <a
            href="https://calendar.app.google/NHF1ScCWjh4WJaey6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
          >
            Agendar Reunión
          </a>
        </div>
      </div>
    </div>
  );
}
