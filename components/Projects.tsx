'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Brain, BarChart2, LineChart, LayoutDashboard, Users } from 'lucide-react';
import ProjectModal from './ProjectModal';
import type { Project } from '@/types';

const PROJECTS: Project[] = [
  {
    id: 'bayesian-mmm',
    title: 'Bayesian Marketing Mix Model (MMM)',
    area: 'Marketing Measurement Science',
    shortDescription:
      'Built a Bayesian MMM to quantify the incremental contribution of paid media channels, enabling confident budget reallocation decisions for marketing leadership.',
    tags: ['Python', 'PyMC', 'Bayesian Inference', 'BigQuery'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'propensity-scoring',
    title: 'Buyer Propensity Scoring System',
    area: 'ML & Predictive Analytics',
    shortDescription:
      'End-to-end propensity model on 134K buyer records with severe class imbalance (~12% purchase rate), improving sales team targeting efficiency through model-driven prioritization.',
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'SQL'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'geo-lift',
    title: 'Geo-Lift Incrementality Testing Framework',
    area: 'Marketing Measurement Science',
    shortDescription:
      'Designed a matched-market geo-lift testing system to measure the true incrementality of digital campaigns, moving attribution beyond last-click.',
    tags: ['Python', 'Causal Inference', 'GeoLift', 'BigQuery'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'mta-engine',
    title: 'Multi-Touch Attribution Engine',
    area: 'Marketing Analytics',
    shortDescription:
      'Replaced last-touch attribution with a Shapley value + Markov chain MTA model, surfacing hidden upper-funnel touchpoint value across the full customer journey.',
    tags: ['SQL', 'Python', 'Shapley Values', 'Markov Chain'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'exec-dashboard',
    title: 'Executive Marketing Dashboard Ecosystem',
    area: 'Business Intelligence & Reporting',
    shortDescription:
      'Designed and delivered a suite of executive-facing Power BI dashboards replacing weekly ad hoc reporting, enabling self-serve analytics adoption across marketing and sales leadership.',
    tags: ['Power BI', 'DAX', 'GA4', 'SQL'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'funnel-analysis',
    title: 'Customer Journey Funnel Analysis & Storytelling Report',
    area: 'Data Storytelling & BI',
    shortDescription:
      'Built an end-to-end funnel analysis from anonymous to authenticated user journeys, packaged as a stakeholder-ready narrative report that directly informed product and marketing strategy.',
    tags: ['GA4', 'BigQuery', 'Power BI', 'Data Narrative'],
    detail: '[Placeholder — full case study coming]',
  },
  {
    id: 'growth-analytics',
    title: 'Growth Analytics Initiative',
    area: 'Business Analytics & Strategy',
    shortDescription:
      'Placeholder for a growth analytics project spanning user acquisition, retention analysis, and revenue forecasting. Description and details will be added.',
    tags: ['Python', 'SQL', 'BigQuery'],
    detail: '[Placeholder — full case study coming]',
  },
];

const ICONS = [TrendingUp, Brain, LineChart, BarChart2, LayoutDashboard, Users, TrendingUp];

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

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-14"
        >
          Selected Case Studies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-[#13151C] rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all cursor-pointer"
                onClick={() => setSelected(project)}
              >
                {/* Card header with dot pattern accent */}
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
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
