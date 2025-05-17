import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-black text-white p-8">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Hi, I'm <span class="text-indigo-400">Your Name</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-300">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <div class="space-x-4">
          <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full transition duration-300">
            View My Work
          </button>
          <button class="border-2 border-indigo-600 hover:bg-indigo-600 text-white px-8 py-3 rounded-full transition duration-300">
            Contact Me
          </button>
        </div>
        <div class="mt-12 flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}); 