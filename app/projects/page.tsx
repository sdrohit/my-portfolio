'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brain, TrendingUp, LayoutDashboard, BarChart2, Activity, Users, Target, Github } from 'lucide-react';
import Link from 'next/link';
import ProjectModal from '@/components/ProjectModal';
import { ALL_PROJECTS } from '@/lib/projects';
import type { Project } from '@/types';

const DOMAINS = ['All', 'ML & AI', 'Marketing', 'BI & Finance', 'Product', 'Sales', 'Experimentation', 'Customer'] as const;

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  'ML & AI': Brain,
  'Marketing': TrendingUp,
  'BI & Finance': LayoutDashboard,
  'Product': BarChart2,
  'Sales': Target,
  'Experimentation': Activity,
  'Customer': Users,
};

const DOMAIN_COUNTS = Object.fromEntries(
  DOMAINS.slice(1).map((d) => [d, ALL_PROJECTS.filter((p) => p.domain === d).length])
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeFilter === 'All'
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((p) => p.domain === activeFilter);

  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F1117] pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Full Portfolio
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
            All Projects
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-2xl">
            18 end-to-end analytics case studies spanning ML, marketing measurement, product analytics,
            sales intelligence, business intelligence, experimentation, and customer analytics.
          </p>
        </motion.div>

        {/* Domain filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {DOMAINS.map((domain) => {
            const count = domain === 'All' ? ALL_PROJECTS.length : DOMAIN_COUNTS[domain];
            const isActive = activeFilter === domain;
            return (
              <button
                key={domain}
                onClick={() => setActiveFilter(domain)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-accent text-white shadow-sm shadow-accent/20'
                    : 'bg-white dark:bg-[#13151C] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-accent/40 hover:text-accent'
                }`}
              >
                {domain}
                <span className={`ml-1.5 text-xs ${isActive ? 'opacity-80' : 'opacity-50'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Results count */}
        <p className="text-xs text-slate-400 dark:text-slate-500 mb-6 font-medium uppercase tracking-wider">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          {activeFilter !== 'All' ? ` · ${activeFilter}` : ''}
        </p>

        {/* Project grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const Icon = DOMAIN_ICONS[project.domain] ?? TrendingUp;
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group bg-white dark:bg-[#13151C] rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all cursor-pointer flex flex-col"
                  onClick={() => project.githubUrl ? window.open(project.githubUrl, '_blank') : setSelected(project)}
                >
                  {/* Card header */}
                  <div className="relative h-16 bg-gradient-to-br from-accent/8 to-accent/4 dark:from-accent/15 dark:to-accent/5 overflow-hidden flex-shrink-0">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, rgba(99,102,241,0.4) 1px, transparent 1px)',
                        backgroundSize: '14px 14px',
                      }}
                    />
                    <Icon
                      className="absolute bottom-2 right-3 text-accent/20 group-hover:text-accent/35 transition-colors"
                      size={40}
                      strokeWidth={1}
                    />
                    {project.featured && (
                      <span className="absolute top-2 left-3 px-2 py-0.5 bg-accent/15 text-accent text-[10px] font-semibold rounded-full tracking-wide uppercase">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-xs font-medium text-accent mb-1.5">{project.area}</p>
                    <h3 className="font-display font-bold text-slate-900 dark:text-slate-50 text-base mb-2.5 leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 text-slate-400 text-xs">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                      {project.githubUrl ? (
                        <><Github size={13} /> View on GitHub</>
                      ) : (
                        <>View Details <ArrowRight size={13} /></>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
