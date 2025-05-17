import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const location = useLocation();

  // Close menu when clicking outside
  useVisibleTask$(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
        isMenuOpen.value = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div class="flex-shrink-0">
            <Link href="/" class="text-xl font-bold text-blue-600">
              Nguyễn Minh Hiếu
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div class="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                class={`text-gray-600 hover:text-blue-600 transition-colors ${
                  location.url.pathname === link.href ? 'text-blue-600 font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
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
            <Link
              key={link.href}
              href={link.href}
              onClick$={() => (isMenuOpen.value = false)}
              class={`block py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 transition-colors ${
                location.url.pathname === link.href ? 'text-blue-600 bg-blue-50' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}); 