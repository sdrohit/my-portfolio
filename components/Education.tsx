'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EDUCATION = [
  {
    institution: 'University of North Carolina',
    location: 'Charlotte, NC',
    degree: 'Master of Science, Information Technology',
    specialization: 'Specialization in Data Science',
    period: 'Aug 2018 – Dec 2019',
    gpa: '4.0 / 4.0',
  },
  {
    institution: 'University of Mumbai',
    location: 'Mumbai, India',
    degree: 'Bachelor of Engineering, Information Technology',
    specialization: '',
    period: 'Jun 2012 – May 2016',
    gpa: '3.0 / 4.0',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#FAFAFA] dark:bg-[#0F1117]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Education</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-12"
        >
          Academic Background
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white dark:bg-[#1C1F28] rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-accent mb-1 uppercase tracking-wide">{edu.institution}</p>
                  <h3 className="font-display font-bold text-slate-900 dark:text-slate-50 text-lg leading-snug mb-1">
                    {edu.degree}
                  </h3>
                  {edu.specialization && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{edu.specialization}</p>
                  )}
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar size={11} /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin size={11} /> {edu.location}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                    <Award size={11} /> GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
