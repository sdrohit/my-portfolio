'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
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
  const [activeIdx, setActiveIdx] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const active = EXPERIENCE[activeIdx];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#13151C]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
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

        {/* ── Desktop: two-column tab layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="hidden md:flex gap-8"
        >
          {/* Left: role selector */}
          <div className="w-60 flex-shrink-0 space-y-1">
            {EXPERIENCE.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-full text-left px-4 py-3.5 rounded-xl transition-all relative group ${
                  activeIdx === i
                    ? 'bg-accent/8 dark:bg-accent/10'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                {/* Active indicator bar */}
                {activeIdx === i && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-2 bottom-2 w-0.5 bg-accent rounded-full"
                  />
                )}
                <p className={`text-[11px] font-semibold mb-0.5 transition-colors ${activeIdx === i ? 'text-accent' : 'text-slate-400'}`}>
                  {item.period}
                </p>
                <p className={`text-sm font-semibold leading-tight transition-colors ${activeIdx === i ? 'text-slate-900 dark:text-slate-50' : 'text-slate-600 dark:text-slate-400'}`}>
                  {item.role}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 leading-tight">{item.company}</p>
              </button>
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="flex-1 min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <div className="bg-[#FAFAFA] dark:bg-[#1C1F28] rounded-2xl p-8 border border-slate-100 dark:border-slate-800 h-full">
                  <span className="inline-block text-xs font-semibold text-accent bg-accent/8 dark:bg-accent/10 px-3 py-1 rounded-full mb-4">
                    {active.company}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 leading-tight">
                    {active.role}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar size={12} className="text-accent/60" />
                      {active.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin size={12} className="text-accent/60" />
                      {active.location}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {active.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Mobile: accordion ── */}
        <div className="md:hidden space-y-2">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#1C1F28]"
            >
              <button
                onClick={() => setOpenMobile(openMobile === i ? null : i)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <div>
                  <p className="text-xs text-accent font-semibold mb-0.5">{item.period}</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{item.role}</p>
                  <p className="text-xs text-slate-400">{item.company}</p>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-slate-400 transition-transform flex-shrink-0 ml-3 ${openMobile === i ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {openMobile === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-slate-100 dark:border-slate-800 pt-4">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                        <MapPin size={11} className="text-accent/60" />
                        {item.location}
                      </span>
                      <ul className="space-y-2.5">
                        {item.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
