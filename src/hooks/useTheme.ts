import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme');
      return (saved as Theme) || 'system';
    } catch {
      return 'system';
    }
  });

  useEffect(() => {
    const apply = (t: Theme) => {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const root = document.documentElement;
      if (t === 'system') {
        if (prefersDark) root.classList.add('dark');
        else root.classList.remove('dark');
      } else if (t === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    apply(theme);
    try { localStorage.setItem('theme', theme); } catch {}

    const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => { if (theme === 'system') apply('system'); };
    if (mql && mql.addEventListener) mql.addEventListener('change', listener);
    else if (mql && (mql as any).addListener) (mql as any).addListener(listener);
    return () => {
      if (mql && mql.removeEventListener) mql.removeEventListener('change', listener);
      else if (mql && (mql as any).removeListener) (mql as any).removeListener(listener);
    };
  }, [theme]);

  return { theme, setTheme } as const;
}
