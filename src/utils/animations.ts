// Animation utility to handle motion library with proper error handling
export const safeAnimate = (
  element: any,
  keyframes: any,
  options: any = {}
) => {
  try {
    // Dynamic import to avoid build issues
    import('motion').then(({ animate }) => {
      animate(element, keyframes, options);
    }).catch(() => {
      // Fallback: just remove opacity-0 class if animation fails
      if (element && element.classList) {
        element.classList.remove('opacity-0');
      } else if (element && element.length) {
        Array.from(element).forEach((el: any) => {
          if (el.classList) {
            el.classList.remove('opacity-0');
          }
        });
      }
    });
  } catch (error) {
    // Fallback: just remove opacity-0 class if animation fails
    if (element && element.classList) {
      element.classList.remove('opacity-0');
    } else if (element && element.length) {
      Array.from(element).forEach((el: any) => {
        if (el.classList) {
          el.classList.remove('opacity-0');
        }
      });
    }
  }
};

export const safeStagger = (delay: number) => {
  try {
    // Dynamic import to avoid build issues
    return import('motion').then(({ stagger }) => stagger(delay)).catch(() => delay);
  } catch (error) {
    return delay;
  }
}; 