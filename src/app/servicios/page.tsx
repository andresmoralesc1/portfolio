import { ServiceCard } from '@/components/sections/ServiceCard';
import { services } from '@/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios | Andrés Morales',
  description: 'Servicios de consultoría técnica: UX/UI Design, Automatización con n8n/Make, y desarrollo web.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Servicios
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Soluciones técnicas diseñadas para optimizar procesos y crear
            experiencias digitales memorables.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center py-16 border-t border-neutral-800">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-neutral-400 mb-8">
            Cuéntame sobre tu proyecto y discutamos cómo puedo ayudarte a
            llevarlo al siguiente nivel.
          </p>
          <a
            href="mailto:contacto@andresmorales.com.co"
            className="inline-block px-8 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}
