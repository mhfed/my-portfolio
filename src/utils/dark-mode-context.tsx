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
    console.log('Toggle called, current isDark:', isDark.value);
    isDark.value = !isDark.value;
    console.log('New isDark value:', isDark.value);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', isDark.value.toString());
      
      // For Tailwind v4, explicitly add/remove classes
      if (isDark.value) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
      
      console.log('DOM class updated, dark class present:', document.documentElement.classList.contains('dark'));
      console.log('HTML classes:', document.documentElement.className);
    }
  });

  useVisibleTask$(() => {
    console.log('DarkModeProvider useVisibleTask$ running');
    
    // Check for saved dark mode preference or default to system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('Saved mode:', savedMode, 'Prefers dark:', prefersDark);
    
    const shouldBeDark = savedMode ? savedMode === 'true' : prefersDark;
    isDark.value = shouldBeDark;
    
    // For Tailwind v4, ensure both class and attribute are set
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    
    console.log('Initial dark mode set to:', shouldBeDark);
    console.log('HTML classes:', document.documentElement.className);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('darkMode')) {
        isDark.value = e.matches;
        if (e.matches) {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        }
        console.log('System theme changed to:', e.matches);
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