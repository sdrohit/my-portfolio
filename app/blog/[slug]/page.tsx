import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { getPost, getAllPosts } from '@/lib/mdx';
import { formatDate, extractHeadings } from '@/lib/utils';
import TableOfContents from '@/components/TableOfContents';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: `${post.title} — Rohit Shenvi Diwadkar`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  const headings = extractHeadings(post.content);

  return (
    <>
      <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0F1117] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft size={14} /> Back to Writing
          </Link>

          <div className="flex gap-16 items-start">
            {/* Article */}
            <article className="flex-1 min-w-0">
              <header className="mb-10">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 leading-tight">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
              </header>

              <div
                className="
                  prose prose-slate dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:font-bold
                  prose-h2:text-2xl prose-h3:text-xl
                  prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-400
                  prose-li:text-slate-600 dark:prose-li:text-slate-400
                  prose-strong:text-slate-900 dark:prose-strong:text-slate-100
                  prose-table:text-sm
                  prose-th:font-semibold
                "
              >
                <MDXRemote
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [
                        rehypeHighlight,
                        rehypeSlug,
                        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                      ],
                    },
                  }}
                />
              </div>
            </article>

            {/* TOC — desktop only */}
            <aside className="hidden xl:block w-52 flex-shrink-0 sticky top-24 self-start">
              <TableOfContents headings={headings} />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
