import { 
  createContextId, 
  useContext, 
  useContextProvider, 
  useSignal, 
  useVisibleTask$,
  component$,
  Slot,
  type Signal,
  type QRL,
  $
} from '@builder.io/qwik';

export interface DarkModeContext {
  isDark: Signal<boolean>;
  toggle: QRL<() => void>;
}

export const DarkModeContextId = createContextId<DarkModeContext>('dark-mode');

export const useDarkMode = () => useContext(DarkModeContextId);

export const DarkModeProvider = component$(() => {
  const isDark = useSignal(false);

  const toggle = $(() => {
    isDark.value = !isDark.value;
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', isDark.value.toString());
      document.documentElement.classList.toggle('dark', isDark.value);
    }
  });

  useVisibleTask$(() => {
    // Check for saved dark mode preference or default to system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedMode ? savedMode === 'true' : prefersDark;
    isDark.value = shouldBeDark;
    document.documentElement.classList.toggle('dark', shouldBeDark);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('darkMode')) {
        isDark.value = e.matches;
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  });

  useContextProvider(DarkModeContextId, {
    isDark,
    toggle,
  });

  return <Slot />;
}); 