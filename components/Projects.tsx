'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Brain, BarChart2, LayoutDashboard, Users, Activity, Github } from 'lucide-react';
import Link from 'next/link';
import ProjectModal from './ProjectModal';
import { FEATURED_PROJECTS } from '@/lib/projects';
import type { Project } from '@/types';

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  'ML & AI': Brain,
  'Marketing': TrendingUp,
  'BI & Finance': LayoutDashboard,
  'Product': BarChart2,
  'Sales': Activity,
  'Experimentation': Activity,
  'Customer': Users,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] dark:bg-[#0F1117]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Work &amp; Projects
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-end justify-between mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            Selected Case Studies
          </h2>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-3 transition-all"
          >
            View all 18 projects <ArrowRight size={14} />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {FEATURED_PROJECTS.map((project) => {
            const Icon = DOMAIN_ICONS[project.domain] ?? TrendingUp;
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-[#13151C] rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all cursor-pointer"
                onClick={() => setSelected(project)}
              >
                <div className="relative h-20 bg-gradient-to-br from-accent/8 to-accent/4 dark:from-accent/15 dark:to-accent/5 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, rgba(99,102,241,0.4) 1px, transparent 1px)',
                      backgroundSize: '14px 14px',
                    }}
                  />
                  <Icon
                    className="absolute bottom-2 right-4 text-accent/20 group-hover:text-accent/35 transition-colors"
                    size={52}
                    strokeWidth={1}
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium text-accent mb-2">{project.area}</p>
                  <h3 className="font-display font-bold text-slate-900 dark:text-slate-50 text-lg mb-3 leading-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                      View Details <ArrowRight size={14} />
                    </button>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA — view all projects */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-[#13151C] border border-slate-100 dark:border-slate-800"
        >
          <div>
            <p className="font-display font-semibold text-slate-900 dark:text-slate-50 text-base">
              18 projects across 7 analytics domains
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              ML &amp; AI · Marketing · Product · Sales · BI &amp; Finance · Experimentation · Customer
            </p>
          </div>
          <Link
            href="/projects"
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-[#4F46E5] transition-colors shadow-sm shadow-accent/20"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
