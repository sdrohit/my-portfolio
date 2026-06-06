'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface Props {
  posts: BlogPost[];
}

export default function BlogPreview({ posts }: Props) {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-[#13151C]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Blog / Writing
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50"
          >
            Recent Writing
          </motion.h2>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-3 transition-all shrink-0"
          >
            Read All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.slice(0, 2).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full bg-[#FAFAFA] dark:bg-[#1C1F28] rounded-2xl border border-slate-100 dark:border-slate-800 p-6 hover:border-accent/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <h3 className="font-display font-bold text-slate-900 dark:text-slate-50 text-xl mb-3 leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
