import { component$, useStore, useVisibleTask$, $ } from '@builder.io/qwik';
import { animate, stagger } from 'motion';

export default component$(() => {
  const formState = useStore({
    name: '',
    email: '',
    message: '',
    isSubmitting: false,
    errors: {
      name: '',
      email: '',
      message: ''
    }
  });

  useVisibleTask$(() => {
    // Animate section title
    const title = document.querySelector('.contact-title');
    if (title) {
      try {
        animate(
          title as any,
          { 
            opacity: [0, 1],
            transform: ['translateY(20px)', 'translateY(0)']
          } as any,
          { 
            duration: 0.8
          } as any
        );
      } catch (e) {
        console.log('Animation not available');
      }
    }

    // Animate contact info with stagger
    const contactItems = document.querySelectorAll('.contact-item');
    if (contactItems.length) {
      try {
        animate(
          contactItems as any,
          { 
            opacity: [0, 1],
            transform: ['translateX(-20px)', 'translateX(0)']
          } as any,
          { 
            duration: 0.6,
            delay: stagger(0.1)
          } as any
        );
      } catch (e) {
        console.log('Animation not available');
      }
    }

    // Animate form with fade
    const form = document.querySelector('.contact-form');
    if (form) {
      try {
        animate(
          form as any,
          { 
            opacity: [0, 1],
            transform: ['translateY(20px)', 'translateY(0)']
          } as any,
          { 
            duration: 0.8,
            delay: 0.3
          } as any
        );
      } catch (e) {
        console.log('Animation not available');
      }
    }
  });

  const validateForm = $(() => {
    let isValid = true;
    formState.errors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formState.name.trim()) {
      formState.errors.name = 'Name is required';
      isValid = false;
    }

    if (!formState.email.trim()) {
      formState.errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      formState.errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formState.message.trim()) {
      formState.errors.message = 'Message is required';
      isValid = false;
    }

    return isValid;
  });

  return (
    <section class="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800" id="contact">
      <div class="max-w-6xl mx-auto px-4 md:px-8">
        <h2 class="contact-title opacity-0 text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Get In Touch
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div class="order-2 lg:order-1">
            <h3 class="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gray-900">Contact Information</h3>
            <div class="space-y-4 md:space-y-6">
              <div class="contact-item opacity-0 flex items-center group">
                <span class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 md:mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 text-sm md:text-base">
                  📍
                </span>
                <span class="text-gray-700 text-base md:text-lg">Vietnam</span>
              </div>
              <div class="contact-item opacity-0 flex items-center group">
                <span class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 md:mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 text-sm md:text-base">
                  📧
                </span>
                <a href="mailto:nmhieu04091999@gmail.com" class="text-gray-700 text-base md:text-lg hover:text-blue-600 transition-colors duration-300 break-all">
                  nmhieu04091999@gmail.com
                </a>
              </div>
              <div class="contact-item opacity-0 flex items-center group">
                <span class="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 md:mr-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 text-sm md:text-base">
                  📱
                </span>
                <a href="tel:+84982084197" class="text-gray-700 text-base md:text-lg hover:text-blue-600 transition-colors duration-300">
                  +84 982 084 197
                </a>
              </div>
            </div>
            <div class="mt-8 md:mt-12">
              <h4 class="text-lg md:text-xl font-bold mb-4 md:mb-6 text-gray-900">Follow Me</h4>
              <div class="flex space-x-4 md:space-x-6">
                <a href="https://linkedin.com/in/mhfed" target="_blank" rel="noopener noreferrer" class="contact-item opacity-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
                  <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/mhfed" target="_blank" rel="noopener noreferrer" class="contact-item opacity-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300">
                  <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <form
              class="contact-form opacity-0"
              preventdefault:submit
              onSubmit$={async () => {
                if (await validateForm()) {
                  formState.isSubmitting = true;
                  // Add your form submission logic here
                  console.log('Form submitted:', formState);
                  setTimeout(() => {
                    formState.isSubmitting = false;
                    // Reset form
                    formState.name = '';
                    formState.email = '';
                    formState.message = '';
                  }, 1000);
                }
              }}
            >
              <div class="space-y-4 md:space-y-6">
                <div>
                  <label class="block text-gray-700 mb-2 font-medium text-sm md:text-base" for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-sm md:text-base ${
                      formState.errors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    required
                    value={formState.name}
                    onInput$={(e: any) => (formState.name = e.target.value)}
                  />
                  {formState.errors.name && (
                    <p class="mt-1 text-xs md:text-sm text-red-500">{formState.errors.name}</p>
                  )}
                </div>
                <div>
                  <label class="block text-gray-700 mb-2 font-medium text-sm md:text-base" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-sm md:text-base ${
                      formState.errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    required
                    value={formState.email}
                    onInput$={(e: any) => (formState.email = e.target.value)}
                  />
                  {formState.errors.email && (
                    <p class="mt-1 text-xs md:text-sm text-red-500">{formState.errors.email}</p>
                  )}
                </div>
                <div>
                  <label class="block text-gray-700 mb-2 font-medium text-sm md:text-base" for="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    class={`w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 text-sm md:text-base resize-none ${
                      formState.errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    required
                    value={formState.message}
                    onInput$={(e: any) => (formState.message = e.target.value)}
                  ></textarea>
                  {formState.errors.message && (
                    <p class="mt-1 text-xs md:text-sm text-red-500">{formState.errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  class={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 md:py-4 rounded-lg transition-all duration-300 text-sm md:text-base font-medium ${
                    formState.isSubmitting 
                      ? 'opacity-75 cursor-not-allowed' 
                      : 'hover:from-blue-700 hover:to-purple-700 hover:shadow-lg'
                  }`}
                >
                  {formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}); 