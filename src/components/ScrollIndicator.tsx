import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const ScrollIndicator = component$(() => {
  const scrollProgress = useSignal(0);

  useVisibleTask$(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      scrollProgress.value = Math.min(progress, 100);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress);
  });

  return (
    <div 
      class="scroll-indicator"
      style={{ transform: `scaleX(${scrollProgress.value / 100})` }}
    />
  );
}); 