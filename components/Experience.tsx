'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import type { ExperienceItem } from '@/types';

const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'CoStar Group (LoopNet)',
    role: 'Data Analytics Lead',
    period: '2022 – Present',
    location: 'Richmond, VA',
    bullets: ['Details and key achievements will be added here.'],
  },
  {
    company: 'CoStar Group (LoopNet)',
    role: 'Marketing Data Analyst II',
    period: '2019 – 2022',
    location: 'Washington, DC',
    bullets: ['Details and key achievements will be added here.'],
  },
  {
    company: 'CoStar Group',
    role: 'Visual Information Analyst',
    period: '2020 – 2022',
    location: 'Washington, DC',
    bullets: ['Details and key achievements will be added here.'],
  },
  {
    company: 'Chemours Company',
    role: 'EHS Analyst Intern',
    period: '2019',
    location: 'Wilmington, DE',
    bullets: ['Details and key achievements will be added here.'],
  },
  {
    company: 'Infosys Ltd.',
    role: 'System Engineer',
    period: '2017 – 2018',
    location: 'India',
    bullets: ['Details and key achievements will be added here.'],
  },
  {
    company: 'Vuclip',
    role: 'Ad-Operation Analyst',
    period: '2016 – 2017',
    location: 'India',
    bullets: ['Details and key achievements will be added here.'],
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
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-16"
        >
          Where I&apos;ve Worked
        </motion.h2>

        <div className="relative">
          {/* Vertical line — centered on desktop, left on mobile */}
          <div className="absolute left-4 top-3 bottom-3 w-px bg-slate-200 dark:bg-slate-700 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {EXPERIENCE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${item.company}-${i}`}
                  initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55 }}
                  className={`relative flex md:items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-white dark:border-[#13151C] z-10 shadow-md shadow-accent/30" />

                  {/* Card */}
                  <div className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
                    <div className="bg-[#FAFAFA] dark:bg-[#1C1F28] rounded-2xl p-5 border border-slate-100 dark:border-slate-800 hover:border-accent/30 hover:shadow-md transition-all">
                      <p className="text-xs font-semibold text-accent mb-1">{item.company}</p>
                      <h3 className="font-display font-bold text-slate-900 dark:text-slate-50 text-lg mb-2 leading-tight">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar size={11} /> {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                          <MapPin size={11} /> {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
