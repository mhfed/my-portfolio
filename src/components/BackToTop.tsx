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
      class={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
        isVisible.value 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <svg 
        class="w-6 h-6 mx-auto" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
}); 