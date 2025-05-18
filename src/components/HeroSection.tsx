import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { animate } from 'motion';

export default component$(() => {
  useVisibleTask$(() => {
    // Animate heading with stagger effect
    const heading = document.querySelector('.hero-heading');
    if (heading) {
      animate(
        heading as Element,
        { 
          transform: ['translateY(30px)', 'translateY(0px)'],
          opacity: [0, 1]
        },
        { 
          duration: 0.8,
          easing: [0.16, 1, 0.3, 1] // Custom easing for smooth motion
        }
      );
    }

    // Animate subheading with delay and slide
    const subheading = document.querySelector('.hero-subheading');
    if (subheading) {
      setTimeout(() => {
        animate(
          subheading as Element,
          { 
            transform: ['translateX(-20px)', 'translateX(0)'],
            opacity: [0, 1]
          },
          { 
            duration: 0.8,
            easing: [0.16, 1, 0.3, 1]
          }
        );
      }, 300);
    }

    // Animate button with scale and glow
    const button = document.querySelector('.hero-button');
    if (button) {
      setTimeout(() => {
        animate(
          button as Element,
          { 
            transform: ['scale(0.8)', 'scale(1)'],
            opacity: [0, 1],
            boxShadow: ['0 0 0 rgba(37, 99, 235, 0)', '0 0 20px rgba(37, 99, 235, 0.2)']
          },
          { 
            duration: 0.6,
            easing: [0.16, 1, 0.3, 1]
          }
        );
      }, 600);
    }
  });

  return (
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient with animation */}
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient"></div>
      
      {/* Animated shapes */}
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div class="text-center max-w-3xl mx-auto relative z-10 px-4">
        <h1 class="hero-heading opacity-0 text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Building the Future with{' '}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Code
          </span>
        </h1>
        
        <p class="hero-subheading opacity-0 text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          Transforming ideas into elegant, performant solutions
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="hero-button opacity-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            Get Started
          </button>
          <button class="hero-button opacity-0 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}); 