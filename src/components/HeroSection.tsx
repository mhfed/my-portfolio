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
      class="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient"></div>

      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div class="text-center max-w-3xl mx-auto relative z-10 px-4">
        <MotionSection
          keyframes={{ opacity: [0, 1], y: [30, 0] }}
          options={{ duration: 0.8, delay: 0.2 }}
          class=""
        >
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Nguyễn Minh Hiếu</span>
          </h1>
        </MotionSection>

        <MotionSection
          keyframes={{ opacity: [0, 1], y: [20, 0] }}
          options={{ duration: 0.8, delay: 0.4 }}
          class=""
        >
          <p class="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Frontend Developer | UI/UX Enthusiast | JavaScript Specialist
          </p>
        </MotionSection>

        <MotionSection
          keyframes={{ opacity: [0, 1], y: [20, 0] }}
          options={{ duration: 0.6, delay: 0.6 }}
          class=""
        >
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick$={() => scrollToSection('projects')}
              class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              View My Work
            </button>
            <button 
              onClick$={() => scrollToSection('contact')}
              class="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200"
            >
              Contact Me
            </button>
          </div>
        </MotionSection>
      </div>
    </MotionSection>
  );
});
