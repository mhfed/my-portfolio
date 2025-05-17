import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/Hero';
import About from '~/components/About';
import Skills from '~/components/Skills';
import Projects from '~/components/Projects';
import Contact from '~/components/Contact';

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Your Name - Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Professional portfolio showcasing my work as a full-stack developer.',
    },
    {
      name: 'keywords',
      content: 'portfolio, web development, full-stack, developer, software engineer',
    },
  ],
};
