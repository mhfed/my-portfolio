import { component$, useStore } from '@builder.io/qwik';

export default component$(() => {
  const formState = useStore({
    name: '',
    email: '',
    message: '',
  });

  return (
    <section class="py-20 bg-white" id="contact">
      <div class="max-w-6xl mx-auto px-8">
        <h2 class="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <span class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  📍
                </span>
                <span class="text-gray-700">San Francisco, CA</span>
              </div>
              <div class="flex items-center">
                <span class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  📧
                </span>
                <a href="mailto:your.email@example.com" class="text-gray-700 hover:text-indigo-600">
                  your.email@example.com
                </a>
              </div>
              <div class="flex items-center">
                <span class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  📱
                </span>
                <a href="tel:+1234567890" class="text-gray-700 hover:text-indigo-600">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div class="mt-8">
              <h4 class="text-xl font-bold mb-4">Follow Me</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-indigo-600">
                  LinkedIn
                </a>
                <a href="#" class="text-gray-600 hover:text-indigo-600">
                  Twitter
                </a>
                <a href="#" class="text-gray-600 hover:text-indigo-600">
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div>
            <form
              preventdefault:submit
              onSubmit$={() => {
                console.log('Form submitted:', formState);
                // Add your form submission logic here
              }}
            >
              <div class="space-y-6">
                <div>
                  <label class="block text-gray-700 mb-2" for="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                    onInput$={(e: any) => (formState.name = e.target.value)}
                  />
                </div>
                <div>
                  <label class="block text-gray-700 mb-2" for="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                    onInput$={(e: any) => (formState.email = e.target.value)}
                  />
                </div>
                <div>
                  <label class="block text-gray-700 mb-2" for="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                    onInput$={(e: any) => (formState.message = e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}); 