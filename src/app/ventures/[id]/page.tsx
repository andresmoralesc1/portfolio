import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ventures } from '@/lib/ventures';
import type { Metadata } from 'next';

interface VenturePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: VenturePageProps): Promise<Metadata> {
  const { id } = await params;
  const venture = ventures.find((v) => v.id === id);

  if (!venture) {
    return {
      title: 'Proyecto No Encontrado',
    };
  }

  return {
    title: `${venture.title} | Ventures`,
    description: venture.description,
  };
}

export async function generateStaticParams() {
  return ventures.map((venture) => ({
    id: venture.id,
  }));
}

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

export default async function VenturePage({ params }: VenturePageProps) {
  const { id } = await params;
  const venture = ventures.find((v) => v.id === id);

  if (!venture) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/ventures"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver a Ventures
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${categories[venture.category].color}`}>
              {categories[venture.category].label}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statuses[venture.status].color}`}>
              {statuses[venture.status].label}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            {venture.title}
          </h1>

          <p className="text-xl text-neutral-400 mb-6">
            {venture.description}
          </p>

          <div className="flex items-center gap-6 p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl">
            <div>
              <p className="text-sm text-neutral-500">Inversión Requerida</p>
              <p className="text-2xl font-bold text-neutral-100">{venture.investment}</p>
            </div>
            <div className="h-12 w-px bg-neutral-800"></div>
            <a
              href="https://calendar.app.google/NHF1ScCWjh4WJaey6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
            >
              Discutir Inversión
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="aspect-video relative rounded-2xl overflow-hidden mb-12">
          <Image
            src={venture.image}
            alt={venture.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Full Description */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-neutral-100 mb-4">Sobre el Proyecto</h2>
            <div className="text-neutral-300 leading-relaxed whitespace-pre-line">
              {venture.fullDescription}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center py-12 border-t border-neutral-800">
          <h3 className="text-2xl font-bold text-neutral-100 mb-3">
            ¿Interesado en este proyecto?
          </h3>
          <p className="text-neutral-400 mb-6">
            Agendemos una llamada para discutir los detalles y oportunidades de inversión.
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
      </article>
    </div>
  );
}
