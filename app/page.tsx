import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import BlogPreview from '@/components/BlogPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDots from '@/components/SectionDots';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <BlogPreview posts={posts} />
      <Contact />
      <Footer />
      <SectionDots />
    </main>
  );
}
