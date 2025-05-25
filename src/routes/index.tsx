import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { HeroSection } from '~/components/HeroSection';
import About from '~/components/About';
import Skills from '~/components/Skills';
import WorkExperience from '~/components/WorkExperience';
import Projects from '~/components/Projects';
import Contact from '~/components/Contact';

export default component$(() => {
  return (
    <div class="min-h-screen">
      <HeroSection />
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Nguyễn Minh Hiếu - Frontend Developer Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Professional portfolio showcasing my work as a frontend developer specializing in modern web technologies.',
    },
    {
      name: 'keywords',
      content: 'frontend developer, web development, UI/UX, JavaScript, React, Vue.js',
    },
  ],
};
