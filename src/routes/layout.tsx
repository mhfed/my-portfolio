import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Link } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <header class="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <nav class="max-w-6xl mx-auto px-8 py-4">
          <div class="flex justify-between items-center">
            <Link href="/" class="text-2xl font-bold text-indigo-600">
              Portfolio
            </Link>
            <ul class="flex space-x-8">
              <li>
                <Link href="#about" class="text-gray-600 hover:text-indigo-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" class="text-gray-600 hover:text-indigo-600">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" class="text-gray-600 hover:text-indigo-600">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" class="text-gray-600 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <Slot />
      </main>

      <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-6xl mx-auto px-8">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold mb-4">About Me</h3>
              <p class="text-gray-400">
                A passionate developer focused on creating beautiful and functional web applications.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li>
                  <Link href="#about" class="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" class="text-gray-400 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" class="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-4">Connect</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  GitHub
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
});
