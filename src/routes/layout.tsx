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
      <header class="bg-gray-800 text-white">
        <nav class="container mx-auto px-4 py-5">
          <div class="flex justify-between items-center">
            <div class="text-xl font-bold">
              <Link href="/" class="hover:text-gray-300">
                Nguyễn Minh Hiếu
              </Link>
            </div>
            <ul class="flex space-x-6">
              <li>
                <Link href="/" class="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="/about" class="hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link href="/projects" class="hover:text-gray-300">Projects</Link>
              </li>
              <li>
                <Link href="/skills" class="hover:text-gray-300">Skills</Link>
              </li>
              <li>
                <Link href="/contact" class="hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main class="container mx-auto px-4 py-8">
        <Slot />
      </main>

      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <p>&copy; {new Date().getFullYear()} Nguyễn Minh Hiếu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
});
