import { component$, $ } from '@builder.io/qwik';
import { MotionSection } from './MotionSection';

export const HeroSection = component$(() => {
  // Smooth scroll to section function
  const scrollToSection = $((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  });

  return (
    <MotionSection
      id="hero-section"
      keyframes={{ opacity: [0, 1] }}
      options={{ duration: 0.8 }}
      class="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-0"
    >
      <div class="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 animate-gradient"></div>

      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-20 w-32 h-32 md:w-64 md:h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-40 right-20 w-32 h-32 md:w-64 md:h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/2 w-32 h-32 md:w-64 md:h-64 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div class="text-center max-w-4xl mx-auto relative z-10 px-4">
        <MotionSection
          keyframes={{ opacity: [0, 1], y: [30, 0] }}
          options={{ duration: 0.8, delay: 0.2 }}
          class=""
        >
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight">
            Hi, I'm <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 block sm:inline">Nguyen Minh Hieu</span>
          </h1>
        </MotionSection>

        <MotionSection
          keyframes={{ opacity: [0, 1], y: [20, 0] }}
          options={{ duration: 0.8, delay: 0.4 }}
          class=""
        >
          <p class="text-lg sm:text-xl md:text-2xl text-red-600 dark:text-gray-300 mb-8 md:mb-12 leading-relaxed px-4 md:px-0">
            Frontend Developer | UI/UX Enthusiast | JavaScript Specialist
          </p>
        </MotionSection>

        <MotionSection
          keyframes={{ opacity: [0, 1], y: [20, 0] }}
          options={{ duration: 0.6, delay: 0.6 }}
          class=""
        >
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick$={() => scrollToSection('projects')}
              class="w-full sm:w-auto bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-sm md:text-base"
            >
              View My Work
            </button>
            <button 
              onClick$={() => scrollToSection('contact')}
              class="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-slate-600 text-sm md:text-base"
            >
              Contact Me
            </button>
          </div>
        </MotionSection>

        {/* Quick Stats */}
        <MotionSection
          keyframes={{ opacity: [0, 1], y: [20, 0] }}
          options={{ duration: 0.6, delay: 0.8 }}
          class="mt-12 md:mt-16"
        >
          <div class="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto">
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">4+</div>
              <div class="text-xs md:text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
            </div>
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">10+</div>
              <div class="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">4</div>
              <div class="text-xs md:text-sm text-gray-600 dark:text-gray-400">Companies</div>
            </div>
          </div>
        </MotionSection>
      </div>
    </MotionSection>
  );
});
