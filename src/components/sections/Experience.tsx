'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  company: string;
  companyLink?: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'AI Automation Consultant',
    company: 'Tortorici & Partners',
    companyLink: 'https://tortorici-partners.com',
    period: '2022 - 2024',
    description: 'Founded and managed successful side projects focused on building e-commerce websites and implementing AI-powered solutions. Transitioned from design to automation, learning and applying AI tools to streamline processes, improve customer experience, and increase operational impact.',
  },
  {
    title: 'Executive Search Consultant',
    company: 'Tortorici & Partners',
    companyLink: 'https://tortorici-partners.com',
    period: '2020 - 2024',
    description: 'Innovative leadership in executive search across diverse sectors—Agricultural & Soft Commodities, Biofuels, Commodity Trade Finance, Fertilizers, Metals & Mining, Oil & Energy, and Shipping. Instrumental in establishing Tortorici & Partners as a premier Executive-Search Company.',
  },
  {
    title: 'Co-founder - Customer Support - Sales',
    company: 'HomeSquad',
    companyLink: 'https://homesquad.co',
    period: '2014 - 2018',
    description: 'Strategically orchestrated cleaning personnel deployment across diverse South American cities, ensuring top-tier service excellence. Pioneered meticulous recruitment initiatives, selecting qualified cleaning staff. Exceeded expectations for Tier 1 clients through strategic team deployment.',
  },
  {
    title: 'Marketing Graphic Designer',
    company: 'Acoa Design',
    companyLink: 'http://acoadesign.com',
    period: '2014 - 2018',
    description: 'High-performing B2B Sales Representative excelling in client engagement and decision-driving conversations. Adept at identifying client needs, articulating product benefits, and steering pivotal purchase decisions. Proven track record of spearheading strategic sales initiatives, resulting in a 22% boost in annual sales revenue.',
  },
];

export function Experience() {
  return (
    <section className="py-24 px-6 bg-neutral-950/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            My Experience
          </h2>
          <p className="text-neutral-400">
            A decade of driving results across sales, UX, and automation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-neutral-800" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neutral-700 border-2 border-neutral-900 z-10" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors">
                  <span className="text-neutral-500 text-sm mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-neutral-100 mb-1">
                    {exp.title}
                  </h3>
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-200 transition-colors text-sm"
                    >
                      {exp.company} →
                    </a>
                  ) : (
                    <p className="text-neutral-400 text-sm">{exp.company}</p>
                  )}
                  <p className="text-neutral-500 mt-4 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
