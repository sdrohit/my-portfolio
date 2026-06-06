import Link from 'next/link';
import { Clock, ArrowLeft } from 'lucide-react';
import { getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing — Rohit Shenvi Diwadkar',
  description:
    'Long-form articles on analytics, measurement science, business intelligence, and data storytelling.',
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F1117] pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>

          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Writing</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
              Articles &amp; Insights
            </h1>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl">
              Long-form thinking on measurement science, business intelligence, analytics strategy, and data
              storytelling.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-400">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full bg-white dark:bg-[#13151C] rounded-2xl border border-slate-100 dark:border-slate-800 p-6 hover:border-accent/40 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-slate-900 dark:text-slate-50 text-xl mb-3 leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
