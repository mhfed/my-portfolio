import { component$, useSignal, useVisibleTask$, $ } from '@builder.io/qwik';

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const activeSection = useSignal('hero');

  // Smooth scroll to section function
  const scrollToSection = $((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    isMenuOpen.value = false;
  });

  // Close menu when clicking outside
  useVisibleTask$(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
        isMenuOpen.value = false;
      }
    };

    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['hero-section', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            activeSection.value = sectionId;
            break;
          }
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const navLinks = [
    { sectionId: 'hero-section', label: 'Home' },
    { sectionId: 'about', label: 'About' },
    { sectionId: 'skills', label: 'Skills' },
    { sectionId: 'projects', label: 'Projects' },
    { sectionId: 'contact', label: 'Contact' },
  ];

  return (
    <nav class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div class="flex-shrink-0">
            <button 
              onClick$={() => scrollToSection('hero-section')}
              class="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Nguyễn Minh Hiếu
            </button>
          </div>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick$={() => scrollToSection(link.sectionId)}
                class={`cursor-pointer relative px-3 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-lg group ${
                  activeSection.value === link.sectionId ? 'text-blue-600 font-medium bg-blue-50' : ''
                }`}
              >
                {link.label}
                <span class={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                  activeSection.value === link.sectionId ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div class="md:hidden">
            <button
              class="hamburger-btn p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
              onClick$={() => (isMenuOpen.value = !isMenuOpen.value)}
            >
              <div class="w-6 h-6 relative">
                <span
                  class={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen.value ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span
                  class={`absolute w-full h-0.5 bg-current top-3 transition-opacity duration-300 ${
                    isMenuOpen.value ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  class={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
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
        class={`mobile-menu md:hidden transition-all duration-300 ease-in-out absolute w-full ${
          isMenuOpen.value 
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div class="px-4 pt-2 pb-4 bg-white/90 backdrop-blur-sm shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick$={() => scrollToSection(link.sectionId)}
              class={`block w-full text-left py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md px-3 transition-all duration-300 hover:translate-x-1 hover:shadow-sm ${
                activeSection.value === link.sectionId ? 'text-blue-600 bg-blue-50 translate-x-1 shadow-sm' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}); 