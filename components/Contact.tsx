'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Linkedin, Github, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:rohitdiwadkar@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] dark:bg-[#0F1117]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Get In Touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
        >
          Whether it&apos;s a role, a collaboration, or just a conversation about measurement and analytics
          — I&apos;m always open.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#13151C] text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#13151C] text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#13151C] text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors resize-none"
              placeholder="What&apos;s on your mind?"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-7 py-3 bg-accent text-white rounded-xl font-semibold text-sm hover:bg-[#4F46E5] transition-colors shadow-lg shadow-accent/25"
            >
              <Send size={15} /> Send Message
            </motion.button>

            <AnimatePresence>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium"
                >
                  <CheckCircle size={15} /> Thanks! I&apos;ll be in touch soon.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <a
            href="http://www.linkedin.com/in/rohit-shenvi-diwadkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent transition-colors text-slate-500 dark:text-slate-400"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/sdrohit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent transition-colors text-slate-500 dark:text-slate-400"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:rohitdiwadkar@gmail.com"
            aria-label="Email"
            className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent transition-colors text-slate-500 dark:text-slate-400"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
