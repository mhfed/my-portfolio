import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { animate } from 'motion';

export default component$(() => {
  useVisibleTask$(() => {
    // Animate heading
    const heading = document.querySelector('.hero-heading');
    if (heading) {
      animate(
        heading as Element,
        { 
          opacity: [0, 1],
          transform: ['translateY(20px)', 'translateY(0)']
        },
        { 
          duration: 0.8,
          easing: [0.16, 1, 0.3, 1]
        }
      );
    }

    // Animate subheading
    const subheading = document.querySelector('.hero-subheading');
    if (subheading) {
      animate(
        subheading as Element,
        { 
          opacity: [0, 1],
          transform: ['translateY(20px)', 'translateY(0)']
        },
        { 
          duration: 0.8,
          delay: 0.2,
          easing: [0.16, 1, 0.3, 1]
        }
      );
    }

    // Animate buttons
    const buttons = document.querySelector('.hero-buttons');
    if (buttons) {
      animate(
        buttons as Element,
        { 
          opacity: [0, 1],
          transform: ['translateY(20px)', 'translateY(0)']
        },
        { 
          duration: 0.8,
          delay: 0.4,
          easing: [0.16, 1, 0.3, 1]
        }
      );
    }

    // Animate social links
    const socialLinks = document.querySelector('.hero-social');
    if (socialLinks) {
      animate(
        socialLinks as Element,
        { 
          opacity: [0, 1],
          transform: ['translateY(20px)', 'translateY(0)']
        },
        { 
          duration: 0.8,
          delay: 0.6,
          easing: [0.16, 1, 0.3, 1]
        }
      );
    }
  });

  return (
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white p-8">
      {/* Animated background blobs */}
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <h1 class="hero-heading opacity-0 text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Your Name</span>
        </h1>
        <p class="hero-subheading opacity-0 text-xl md:text-2xl mb-8 text-gray-300">
          Full Stack Developer | UI/UX Enthusiast | Problem Solver
        </p>
        <div class="hero-buttons opacity-0 space-x-4">
          <button class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
            View My Work
          </button>
          <button class="border-2 border-blue-500 hover:bg-blue-500 text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
            Contact Me
          </button>
        </div>
        <div class="hero-social opacity-0 mt-12 flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}); 