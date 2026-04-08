'use client';

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'Sales', level: 90 },
  { name: 'Web Designer', level: 85 },
  { name: 'Photoshop', level: 85 },
  { name: 'WordPress', level: 83 },
  { name: 'AI Agents', level: 82 },
  { name: 'UX Analyst', level: 84 },
  { name: 'AI Automations', level: 80 },
  { name: 'Customer Service', level: 80 },
  { name: 'Prospecting', level: 75 },
  { name: 'Digital Marketing', level: 70 },
];

export function Skills() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Skills
          </h2>
          <p className="text-neutral-400">
            Un decade de experiencia en ventas, UX y automatización con IA
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-neutral-300 font-medium">{skill.name}</span>
                <span className="text-neutral-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-neutral-600 to-neutral-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
