export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  area: string;
  domain: string;
  shortDescription: string;
  tags: string[];
  detail: string;
  featured?: boolean;
  githubUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets?: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
