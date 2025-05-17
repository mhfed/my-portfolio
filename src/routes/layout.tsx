import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Navbar from "~/components/Navbar";

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
      <Navbar />
      <main class="container mx-auto px-4 py-8 pt-20">
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
