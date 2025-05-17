import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { animate } from 'motion';

export default component$(() => {
  useVisibleTask$(() => {
    // Animate heading
    const heading = document.querySelector('.hero-heading');
    if (heading) {
      animate(
        heading as Element,
        { transform: ['translateY(30px)', 'translateY(0px)'] },
        { duration: 0.8 }
      );
      animate(
        heading as Element,
        { opacity: [0, 1] },
        { duration: 0.8 }
      );
    }

    // Animate subheading with delay
    const subheading = document.querySelector('.hero-subheading');
    if (subheading) {
      setTimeout(() => {
        animate(
          subheading as Element,
          { opacity: [0, 1] },
          { duration: 0.8 }
        );
      }, 300);
    }

    // Animate button with scale
    const button = document.querySelector('.hero-button');
    if (button) {
      setTimeout(() => {
        animate(
          button as Element,
          { transform: ['scale(0.8)', 'scale(1)'] },
          { duration: 0.5 }
        );
        animate(
          button as Element,
          { opacity: [0, 1] },
          { duration: 0.5 }
        );
      }, 600);
    }
  });

  return (
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="hero-heading opacity-0 text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Building the Future with Code
        </h1>
        
        <p class="hero-subheading opacity-0 text-xl md:text-2xl text-gray-600 mb-8">
          Transforming ideas into elegant, performant solutions
        </p>
        
        <button class="hero-button opacity-0 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-200">
          Get Started
        </button>
      </div>
    </section>
  );
}); 