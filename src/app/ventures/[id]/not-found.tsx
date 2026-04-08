import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neutral-100 mb-4">
          Proyecto No Encontrado
        </h1>
        <p className="text-neutral-400 mb-8">
          El venture que buscas no existe o ha sido removido.
        </p>
        <Link
          href="/ventures"
          className="inline-block px-8 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
        >
          Ver Todos los Ventures
        </Link>
      </div>
    </div>
  );
}
