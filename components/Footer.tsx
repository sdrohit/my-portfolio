import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#13151C] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Designed &amp; built by Rohit Shenvi Diwadkar · 2025
        </p>
        <div className="flex items-center gap-3">
          <a
            href="http://www.linkedin.com/in/rohit-shenvi-diwadkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-accent transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/sdrohit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-accent transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:rohitdiwadkar@gmail.com"
            aria-label="Email"
            className="p-2 text-slate-400 hover:text-accent transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
