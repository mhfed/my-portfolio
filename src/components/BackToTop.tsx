import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';

export const BackToTop = component$(() => {
  const isVisible = useSignal(false);

  const scrollToTop = $(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  useVisibleTask$(() => {
    const handleScroll = () => {
      isVisible.value = window.scrollY > 300;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <button
      onClick$={scrollToTop}
      class={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-linear-to-br from-blue-600 via-purple-600 to-blue-700 dark:from-blue-500 dark:via-purple-500 dark:to-blue-600 text-white rounded-2xl shadow-xl dark:shadow-slate-900/50 hover:shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group border border-white/20 dark:border-slate-600/30 backdrop-blur-sm ${
        isVisible.value 
          ? 'opacity-100 translate-y-0 rotate-0' 
          : 'opacity-0 translate-y-8 rotate-180 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      {/* Animated background glow */}
      <div class="absolute inset-0 bg-linear-to-br from-blue-400/30 to-purple-500/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      
      {/* Icon container */}
      <div class="relative flex items-center justify-center w-full h-full">
        <svg 
          class="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5 drop-shadow-sm" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2.5" 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </div>

      {/* Ripple effect on click */}
      <div class="absolute inset-0 rounded-2xl overflow-hidden">
        <div class="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-active:scale-100 transition-transform duration-200"></div>
      </div>

      {/* Tooltip */}
      <div class="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div class="bg-gray-900 dark:bg-slate-700 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Back to top
          <div class="absolute left-full top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-slate-700 rotate-45"></div>
        </div>
      </div>
    </button>
  );
}); 