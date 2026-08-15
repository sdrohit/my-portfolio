'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { ExperienceItem } from '@/types';

const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'CoStar Group (LoopNet)',
    role: 'Data Analytics Lead',
    period: '2022 – Present',
    location: 'Richmond, VA',
  },
  {
    company: 'CoStar Group (LoopNet)',
    role: 'Marketing Data Analyst II',
    period: '2019 – 2022',
    location: 'Washington, DC',
  },
  {
    company: 'CoStar Group',
    role: 'Visual Information Analyst',
    period: '2020 – 2022',
    location: 'Washington, DC',
  },
  {
    company: 'Chemours Company',
    role: 'EHS Analyst Intern',
    period: '2019',
    location: 'Wilmington, DE',
  },
  {
    company: 'Infosys Ltd.',
    role: 'System Engineer',
    period: '2017 – 2018',
    location: 'India',
  },
  {
    company: 'Vuclip',
    role: 'Ad-Operation Analyst',
    period: '2016 – 2017',
    location: 'India',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#13151C]">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-slate-100 dark:bg-slate-800 hidden sm:block" />

          <div className="space-y-3">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex items-center gap-6 sm:gap-8 group"
              >
                {/* Period — fixed width left column */}
                <div className="hidden sm:block w-20 flex-shrink-0 text-right">
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500 leading-tight">
                    {item.period.replace(' – ', '\n')}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 items-center justify-center w-3 h-3 rounded-full bg-white dark:bg-[#13151C] border-2 border-slate-200 dark:border-slate-700 group-hover:border-accent group-hover:bg-accent/10 transition-all z-10" />

                {/* Card */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#FAFAFA] dark:bg-[#1C1F28] border border-slate-100 dark:border-slate-800 rounded-xl px-5 py-4 group-hover:border-accent/30 group-hover:shadow-sm transition-all">
                  <div>
                    {/* Period — mobile only */}
                    <p className="text-xs font-medium text-accent mb-0.5 sm:hidden">{item.period}</p>
                    <h3 className="font-display font-semibold text-slate-900 dark:text-slate-50 text-base leading-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <MapPin size={11} className="text-slate-300 dark:text-slate-600" />
                    <span className="text-xs text-slate-400 dark:text-slate-500">{item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
