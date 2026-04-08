'use client';

import { motion } from 'framer-motion';
import { Entropy } from '@/components/ui/Entropy';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Entropy visualization - positioned absolutely on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-40">
        <Entropy size={500} className="" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              Andrés Morales
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto"
        >
          Consultor Técnico · IA & Automatización
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-500 max-w-xl mx-auto leading-relaxed"
        >
          Transformo ideas complejas en soluciones digitales precisas.
          Especializado en UX/UI minimalista y automatización inteligente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-8 py-3 border border-neutral-700 text-neutral-300 rounded-lg font-medium hover:bg-neutral-800/50 transition-colors"
          >
            Contactar
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-neutral-600 to-transparent" />
      </motion.div>
    </section>
  );
}
