'use client';
import { motion } from 'framer-motion';
import { MapPin, Briefcase } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const STATS = [
  { value: 7, suffix: '+', label: 'Years in Analytics' },
  { value: 4, suffix: '+', label: 'Measurement Frameworks' },
  { value: 10, suffix: '+', label: 'ML Models Shipped' },
  { value: 5, suffix: '+', label: 'BI Ecosystems Delivered' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#13151C]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              The analyst who bridges
              <br />
              <span className="text-accent">rigor with clarity.</span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-[0.95rem]">
              <p>
                I&apos;m a Senior Data, Business Intelligence &amp; Marketing Analytics professional with 7+ years of experience turning
                complex datasets into decisions that business leaders actually act on.
              </p>
              <p>
                My technical work spans multi-touch attribution, prescriptive modeling, KPI reporting, mix
                modeling, incrementality testing, causal inference, and ML-powered propensity scoring. My BI work
                covers end-to-end dashboard ecosystems in Power BI and GA4, built for self-serve adoption across
                teams.
              </p>
              <p>
                But what I&apos;m best known for is the part that&apos;s hardest to automate: translating rigorous
                analysis into a clear story that earns trust in the room.
              </p>
              <p>
                I&apos;m currently targeting senior Marketing Science, Analytics, and BI roles where the
                expectation is not just to report the numbers — but to shape decisions.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-5">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={15} className="text-accent flex-shrink-0" />
                <span>Richmond, VA</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Briefcase size={15} className="text-accent flex-shrink-0" />
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#FAFAFA] dark:bg-[#1C1F28] rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-accent/30 transition-colors"
              >
                <div className="font-display text-4xl font-bold text-accent mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
