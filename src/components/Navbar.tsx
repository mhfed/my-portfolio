import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';
import { DarkModeToggle } from './DarkModeToggle';

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const activeSection = useSignal('hero');

  // Smooth scroll to section function
  const scrollToSection = $((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update URL hash
      const hash = sectionId === 'hero-section' ? '' : `#${sectionId}`;
      window.history.pushState(null, '', hash || '/');
      
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    isMenuOpen.value = false;
  });

  // Close menu when clicking outside and handle initial hash
  useVisibleTask$(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
        isMenuOpen.value = false;
      }
    };

    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['hero-section', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            activeSection.value = sectionId;
            // Update URL hash without triggering scroll
            const hash = sectionId === 'hero-section' ? '' : `#${sectionId}`;
            if (window.location.hash !== hash) {
              window.history.replaceState(null, '', hash || '/');
            }
            break;
          }
        }
      }
    };

    // Handle initial hash on page load
    const handleInitialHash = () => {
      const hash = window.location.hash.slice(1); // Remove #
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            activeSection.value = hash;
          }, 100);
        }
      }
    };

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      const sectionId = hash || 'hero-section';
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        activeSection.value = sectionId;
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    
    // Check initial hash
    handleInitialHash();
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  });

  const navLinks = [
    { sectionId: 'hero-section', label: 'Home' },
    { sectionId: 'about', label: 'About' },
    { sectionId: 'skills', label: 'Skills' },
    { sectionId: 'experience', label: 'Experience' },
    { sectionId: 'projects', label: 'Projects' },
    { sectionId: 'contact', label: 'Contact' },
  ];

  return (
    <nav class="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 shadow-lg shadow-black/5 dark:shadow-black/20">
      {/* Gradient overlay for extra visual appeal */}
      <div class="absolute inset-0 bg-linear-to-r from-blue-50/50 via-transparent to-purple-50/50 dark:from-slate-800/50 dark:via-transparent dark:to-slate-700/50"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div class="shrink-0">
            <button 
              onClick$={() => scrollToSection('hero-section')}
              class="text-xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent hover:from-blue-700 hover:via-purple-700 hover:to-blue-900 dark:hover:from-blue-300 dark:hover:via-purple-300 dark:hover:to-blue-200 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Nguyễn Minh Hiếu
            </button>
          </div>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick$={() => scrollToSection(link.sectionId)}
                class={`cursor-pointer relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group ${
                  activeSection.value === link.sectionId 
                    ? 'text-white bg-linear-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-700/80'
                }`}
              >
                {link.label}
                {activeSection.value !== link.sectionId && (
                  <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-300 w-0 group-hover:w-3/4 rounded-full"></span>
                )}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <div class="ml-4">
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button and Dark Mode Toggle */}
          <div class="md:hidden flex items-center space-x-3">
            <DarkModeToggle />
            <button
              class="hamburger-btn p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
            >
              <div class="w-6 h-6 relative">
                <span
                  class={`absolute w-full h-0.5 bg-current transform transition-all duration-300 rounded-full ${
                    isMenuOpen.value ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span
                  class={`absolute w-full h-0.5 bg-current top-3 transition-opacity duration-300 rounded-full ${
                    isMenuOpen.value ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  class={`absolute w-full h-0.5 bg-current transform transition-all duration-300 rounded-full ${
                    isMenuOpen.value ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        class={`mobile-menu md:hidden transition-all duration-300 ease-in-out absolute w-full z-40 ${
          isMenuOpen.value 
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div class="mx-4 mt-2 mb-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/30 border border-white/20 dark:border-slate-700/50 overflow-hidden">
          {/* Gradient overlay for mobile menu */}
          <div class="absolute inset-0 bg-linear-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-slate-800/30 dark:via-transparent dark:to-slate-700/30"></div>
          
          <div class="relative p-2">
            {navLinks.map((link, index) => (
              <button
                key={link.sectionId}
                onClick$={() => scrollToSection(link.sectionId)}
                class={`block w-full text-left py-3 px-4 text-base font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mb-1 ${
                  activeSection.value === link.sectionId 
                    ? 'text-white bg-linear-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25 dark:shadow-blue-400/25' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-700/80'
                }`}
                style={`animation-delay: ${index * 50}ms`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}); 