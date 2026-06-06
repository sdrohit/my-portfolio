'use client';
import { motion } from 'framer-motion';
import { Code2, Database, BarChart3, FlaskConical, Brain, MessageSquare, TrendingUp, Users, Lightbulb } from 'lucide-react';

const CATEGORIES = [
  {
    name: 'Languages & Querying',
    Icon: Code2,
    skills: ['Python', 'SQL', 'R', 'DAX', 'Bash / Shell Scripting', 'Regex'],
    soft: false,
  },
  {
    name: 'Data Platforms & Pipelines',
    Icon: Database,
    skills: ['BigQuery', 'Snowflake', 'Databricks', 'dbt', 'GA4', 'Amplitude', 'Adobe Analytics', 'Segment', 'Airflow', 'Spark'],
    soft: false,
  },
  {
    name: 'BI & Visualization',
    Icon: BarChart3,
    skills: ['Power BI', 'Looker', 'Tableau', 'Google Data Studio / Looker Studio', 'Excel (Advanced)', 'Cohort Analysis', 'Funnel Visualization', 'KPI Frameworks'],
    soft: false,
  },
  {
    name: 'Advanced Analytics',
    Icon: TrendingUp,
    skills: [
      'Marketing Mix Modeling (MMM)',
      'Geo-Lift & Incrementality Testing',
      'Multi-Touch Attribution',
      'Causal Inference',
      'Propensity Modeling',
      'Bayesian Modeling',
      'A/B & Multivariate Testing',
      'Customer Lifetime Value (LTV)',
      'Churn Prediction',
      'Forecasting & Time Series',
      'Segmentation & Clustering',
    ],
    soft: false,
  },
  {
    name: 'ML & Automation',
    Icon: Brain,
    skills: ['XGBoost', 'Scikit-learn', 'PyMC', 'LightGBM', 'Random Forest', 'LLM-Powered Automation', 'Feature Engineering', 'Model Evaluation & Validation'],
    soft: false,
  },
  {
    name: 'Business Intelligence',
    Icon: Lightbulb,
    skills: [
      'Self-Serve Analytics Infrastructure',
      'Data Modeling & Semantic Layer',
      'OKR & Goal Tracking',
      'Revenue Analytics',
      'Go-to-Market Analytics',
      'Product Analytics',
      'Marketing Performance Reporting',
      'Competitive Intelligence',
    ],
    soft: false,
  },
  {
    name: 'Leadership & Strategy',
    Icon: Users,
    skills: [
      'Cross-Functional Team Leadership',
      'Analytics Roadmap Planning',
      'Stakeholder Management',
      'Prioritization Frameworks',
      'Vendor & Agency Collaboration',
      'Hiring & Mentoring Analysts',
      'OKR Definition & Alignment',
    ],
    soft: true,
  },
  {
    name: 'Communication & Storytelling',
    Icon: MessageSquare,
    skills: [
      'Executive Presentations',
      'Data Narrative Design',
      'Translating Data to Business Impact',
      'Board-Level Reporting',
      'Workshop Facilitation',
      'Insight Documentation',
    ],
    soft: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#FAFAFA] dark:bg-[#0F1117]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            What I Work With
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-14"
        >
          Skills & Tech Stack
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              className={`rounded-2xl p-6 border transition-all hover:shadow-md ${
                cat.soft
                  ? 'bg-accent/5 border-accent/20 dark:bg-accent/10 dark:border-accent/30'
                  : 'bg-white dark:bg-[#13151C] border-slate-100 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <cat.Icon
                  size={16}
                  className={cat.soft ? 'text-accent' : 'text-slate-400 dark:text-slate-500'}
                />
                <span
                  className={`text-xs font-semibold tracking-widest uppercase ${
                    cat.soft ? 'text-accent' : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {cat.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      cat.soft
                        ? 'bg-accent/15 text-accent dark:bg-accent/20 italic'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-accent/10 hover:text-accent'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
