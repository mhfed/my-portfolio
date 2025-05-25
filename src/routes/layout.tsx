import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Navbar from "~/components/Navbar";
import { ScrollIndicator } from "~/components/ScrollIndicator";
import { BackToTop } from "~/components/BackToTop";
import { DarkModeProvider } from "~/utils/dark-mode-context";
import Footer from "~/components/Footer";

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

      <Footer />
      
      <BackToTop />
      
    </DarkModeProvider>
  );
});
