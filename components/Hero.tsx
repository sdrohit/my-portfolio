'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import Image from 'next/image';

const ROLES = [
  'Analytics Lead & Advisor',
  'Marketing Measurement Scientist',
  'Lead Business Intelligence Analyst',
  'Lead Marketing Data Analyst',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0F1117]">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.13) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Gradient fade bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FAFAFA] dark:from-[#0F1117] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-32">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-20">

          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Credential chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-7"
            >
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to Senior Roles
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                <Briefcase size={11} className="text-accent" />
                9yr Experience
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-xs font-medium">
                <MapPin size={11} className="text-accent" />
                Richmond, VA
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-slate-50 leading-[1.06] mb-5"
            >
              Rohit Shenvi
              <br />
              Diwadkar
            </motion.h1>

            {/* Role rotator */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 flex items-center justify-center lg:justify-start mb-6"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-medium text-accent"
                >
                  {ROLES[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed"
            >
              I turn complex data into clear decisions. From prescriptive models to executive dashboards —{' '}
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                I&apos;m the analyst leadership actually listens to.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 bg-accent text-white rounded-xl font-semibold hover:bg-[#4F46E5] transition-colors shadow-lg shadow-accent/25 text-sm"
              >
                See My Work
              </a>
            </motion.div>
          </div>

          {/* ── Right: RSD monogram card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-3xl bg-accent/25 blur-3xl scale-110 pointer-events-none" />

            {/* Outer ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent via-accent/40 to-indigo-300/60 blur-sm opacity-70 pointer-events-none" />

            {/* Card */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-accent/60 overflow-hidden shadow-2xl shadow-accent/30">

              {/* Profile photo */}
              <Image
                src="/IMG_7BF56E699C36-1.jpeg"
                alt="Rohit Shenvi Diwadkar"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Subtle inner vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(99,102,241,0.15)] pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-[#1C1F28] border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 whitespace-nowrap"
            >
              <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-400 leading-none mb-0.5">Analytics Lead</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">CoStar Group</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-400 tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-0.5 h-6 bg-gradient-to-b from-accent to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
