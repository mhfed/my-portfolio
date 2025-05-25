import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Navbar from "~/components/Navbar";
import { ScrollIndicator } from "~/components/ScrollIndicator";
import { BackToTop } from "~/components/BackToTop";
import { DarkModeProvider } from "~/utils/dark-mode-context";

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
    <DarkModeProvider>
      <ScrollIndicator />
      <Navbar />
      <main class="min-h-screen bg-linear-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
        <Slot />
      </main>

      <footer class="relative bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white overflow-hidden">
        {/* Animated background elements */}
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div class="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div class="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Gradient overlay */}
        <div class="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
        
        <div class="relative container mx-auto px-4 py-12">
          {/* Main footer content */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div class="text-center md:text-left">
              <h3 class="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Nguyễn Minh Hiếu
              </h3>
              <p class="text-gray-300 dark:text-gray-400 leading-relaxed">
                Passionate developer creating innovative solutions with modern technologies.
              </p>
            </div>

            {/* Quick links */}
            <div class="text-center">
              <h4 class="text-lg font-semibold mb-4 text-gray-200">Quick Links</h4>
              <div class="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <div key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      class="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div class="text-center md:text-right">
              <h4 class="text-lg font-semibold mb-4 text-gray-200">Connect</h4>
              <div class="space-y-2">
                <p class="text-gray-400">
                  <span class="text-gray-300">Email:</span> nmhieu04091999@gmail.com
                </p>
                <p class="text-gray-400">
                  <span class="text-gray-300">Location:</span> Hanoi, Vietnam
                </p>
                <div class="flex justify-center md:justify-end space-x-4 mt-4">
                  {/* Social links placeholder */}
                  <div class="w-8 h-8 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <span class="text-xs">Li</span>
                  </div>
                  <div class="w-8 h-8 bg-linear-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <span class="text-xs">Gh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div class="border-t border-gray-700 dark:border-gray-600 mb-6"></div>

          {/* Copyright */}
          <div class="text-center">
            <p class="text-gray-400 dark:text-gray-500">
              &copy; {new Date().getFullYear()} Nguyễn Minh Hiếu. All rights reserved.
            </p>
            <p class="text-sm text-gray-500 dark:text-gray-600 mt-2">
              Built with ❤️ using Qwik & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
      
      <BackToTop />
    </DarkModeProvider>
  );
});
