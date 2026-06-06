'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionDots() {
  const [active, setActive] = useState('');
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState('');

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3.5"
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group relative flex items-center justify-end gap-2.5"
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered('')}
              aria-label={s.label}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hovered === s.id && (
                  <motion.span
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap pointer-events-none shadow-lg"
                  >
                    {s.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Dot */}
              <motion.div
                animate={{
                  width: active === s.id ? 10 : 6,
                  height: active === s.id ? 10 : 6,
                }}
                transition={{ duration: 0.2 }}
                className={`rounded-full transition-colors duration-200 ${
                  active === s.id
                    ? 'bg-accent shadow-sm shadow-accent/50'
                    : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-accent/60'
                }`}
              />
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
