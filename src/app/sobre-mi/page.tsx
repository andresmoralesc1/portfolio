import type { Metadata } from 'next';
import { About } from '@/components/sections/About';

export const metadata: Metadata = {
  title: 'Sobre Mí | Andrés Morales',
  description: 'Conoce más sobre mi experiencia como Consultor Técnico especializado en UX/UI minimalista, automatización y desarrollo web.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <About />
    </div>
  );
}
