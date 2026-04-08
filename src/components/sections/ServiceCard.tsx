'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import type { Service } from '@/types/portfolio';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const icons = {
  layout: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  ),
  zap: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  terminal: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  ),
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full hover:border-neutral-700 transition-all group">
        <CardContent className="p-8">
          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-neutral-800/50 flex items-center justify-center mb-6 group-hover:bg-neutral-800 transition-colors">
            <svg
              className="w-6 h-6 text-neutral-400 group-hover:text-neutral-200 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {icons[service.icon as keyof typeof icons] || icons.terminal}
            </svg>
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-neutral-100 mb-3">
            {service.title}
          </h3>
          <p className="text-neutral-400 leading-relaxed">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
