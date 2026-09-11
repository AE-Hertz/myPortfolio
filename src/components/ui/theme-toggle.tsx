import React from 'react';
import useTheme from '../../hooks/useTheme';
import { LuSun, LuMoon } from 'react-icons/lu';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const next = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const icon = theme === 'dark' ? <LuMoon /> : <LuSun />;

  return (
    <button aria-label="Toggle theme" onClick={next} className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-sm text-white hover:bg-white/5">
      {icon}
    </button>
  );
}
