import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { useDarkMode } from '~/utils/dark-mode-context';

export const DarkModeToggle = component$(() => {
  const { isDark, toggle } = useDarkMode();

  useVisibleTask$(() => {
    console.log('DarkModeToggle mounted, isDark:', isDark.value);
  });

  return (
    <button
      onClick$={toggle}
      class="relative p-3 rounded-xl bg-linear-to-br from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700 hover:from-blue-100 hover:to-indigo-200 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all duration-500 group shadow-lg hover:shadow-xl dark:shadow-slate-900/30 border border-blue-200/50 dark:border-slate-600/50 hover:border-blue-300/70 dark:hover:border-slate-500/70 hover:scale-105 active:scale-95"
      aria-label={isDark.value ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div class="relative w-6 h-6 overflow-hidden">
        {/* Sun Icon */}
        <div class={`absolute inset-0 transition-all duration-700 ease-in-out ${
          isDark.value ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`}>
          <svg
            class="w-6 h-6 text-amber-500 drop-shadow-sm"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </div>

        {/* Moon Icon */}
        <div class={`absolute inset-0 transition-all duration-700 ease-in-out ${
          isDark.value ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
        }`}>
          <svg
            class="w-6 h-6 text-slate-300 drop-shadow-sm"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
          </svg>
        </div>

        {/* Animated background glow */}
        <div class={`absolute inset-0 rounded-lg transition-all duration-500 ${
          isDark.value 
            ? 'bg-linear-to-br from-blue-400/20 to-purple-500/20 shadow-inner' 
            : 'bg-linear-to-br from-yellow-300/30 to-orange-400/30 shadow-inner'
        }`}></div>
      </div>

      {/* Tooltip */}
      <div class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div class="bg-gray-900 dark:bg-slate-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
          {isDark.value ? 'Light mode' : 'Dark mode'}
          <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-slate-700 rotate-45"></div>
        </div>
      </div>
    </button>
  );
}); 