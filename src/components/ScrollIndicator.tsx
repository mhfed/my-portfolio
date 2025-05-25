import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const ScrollIndicator = component$(() => {
  const scrollProgress = useSignal(0);
  const windowWidth = useSignal(0);

  useVisibleTask$(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      scrollProgress.value = Math.min(progress, 100);
    };

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    // Initial setup
    updateScrollProgress();
    updateWindowWidth();

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateWindowWidth);
    };
  });

  return (
    <div class="fixed top-0 left-0 w-full h-1 z-9999 bg-gray-200/30 dark:bg-slate-800/30">
      {/* Main progress bar */}
      <div 
        class="h-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 transition-transform duration-150 ease-out origin-left shadow-lg"
        style={{ transform: `scaleX(${scrollProgress.value / 100})` }}
      />
      
      {/* Animated glow effect */}
      <div 
        class="absolute top-0 left-0 h-full bg-linear-to-r from-blue-400/50 via-purple-400/50 to-pink-400/50 blur-sm transition-transform duration-150 ease-out origin-left"
        style={{ transform: `scaleX(${scrollProgress.value / 100})` }}
      />
      
      {/* Shimmer effect */}
      <div 
        class="absolute top-0 left-0 h-full w-20 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"
        style={{ 
          transform: `translateX(${(scrollProgress.value / 100) * Math.max(windowWidth.value - 80, 0)}px)`,
          opacity: scrollProgress.value > 0 ? 1 : 0
        }}
      />
    </div>
  );
}); 