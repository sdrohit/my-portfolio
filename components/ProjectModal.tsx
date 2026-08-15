'use client';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Project } from '@/types';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#1C1F28] rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-[#1C1F28] z-10 flex items-start justify-between p-6 border-b border-slate-100 dark:border-slate-700">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  {project.area}
                </p>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0 ml-4 text-slate-500"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {project.shortDescription}
              </p>

              {project.detail && project.detail !== '[Placeholder — full case study coming]' ? (
                <div className="prose prose-sm dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:text-slate-900 dark:prose-headings:text-slate-50
                  prose-h2:text-lg prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-2
                  prose-h3:text-sm prose-h3:font-semibold prose-h3:text-accent prose-h3:uppercase prose-h3:tracking-wider prose-h3:mt-5 prose-h3:mb-2
                  prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:text-sm prose-p:leading-relaxed
                  prose-li:text-slate-600 dark:prose-li:text-slate-400 prose-li:text-sm
                  prose-strong:text-slate-800 dark:prose-strong:text-slate-200
                  prose-table:text-sm prose-table:w-full
                  prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:text-accent prose-th:uppercase prose-th:tracking-wider prose-th:border-b prose-th:border-slate-200 dark:prose-th:border-slate-700 prose-th:pb-2
                  prose-td:border-b prose-td:border-slate-100 dark:prose-td:border-slate-800 prose-td:py-1.5 prose-td:pr-4
                  prose-hr:border-slate-200 dark:prose-hr:border-slate-700 prose-hr:my-4
                  prose-code:text-accent prose-code:text-xs prose-code:bg-accent/10 prose-code:px-1 prose-code:rounded">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.detail}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-slate-400 dark:text-slate-500 italic text-sm">{project.detail}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
