import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const name = useSignal('');
  const email = useSignal('');
  const message = useSignal('');

  return (
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8">Contact Me</h1>

      <div class="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 class="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-medium mb-2">Nguyễn Minh Hiếu</h3>
              <p class="text-gray-600">Frontend Developer</p>
            </div>
            <div>
              <h3 class="text-lg font-medium mb-2">Location</h3>
              <p class="text-gray-600">Ho Chi Minh City, Vietnam</p>
            </div>
            <div>
              <h3 class="text-lg font-medium mb-2">Email</h3>
              <a href="mailto:your.email@example.com" class="text-blue-600 hover:text-blue-800">
                your.email@example.com
              </a>
            </div>
            <div>
              <h3 class="text-lg font-medium mb-2">Social Media</h3>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 class="text-2xl font-semibold mb-6">Send a Message</h2>
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                bind:value={name}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                bind:value={email}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                bind:value={message}
                rows={6}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}); 