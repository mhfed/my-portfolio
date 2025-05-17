import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div class="min-h-screen">
      {/* Hero Section */}
      <section class="py-20 text-center">
        <h1 class="text-5xl font-bold mb-6">
          Hi, I'm <span class="text-blue-600">Nguyễn Minh Hiếu</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Full Stack Developer | Web Developer | Software Engineer
        </p>
        <div class="flex justify-center gap-4">
          <Link href="/projects" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            View My Work
          </Link>
          <Link href="/contact" class="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section class="py-16 bg-gray-50">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold">Featured Projects</h2>
          <p class="text-gray-600 mt-2">Some of my recent work</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your featured projects here */}
        </div>
      </section>
    </div>
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
