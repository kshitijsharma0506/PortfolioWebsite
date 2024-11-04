import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      style={{ backgroundColor: 'var(--background-color)', color: 'var(--title-color-dark)'}}
    >
      <span
        className={`theme-toggle-thumb ${
          theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="h-4 w-4 text-yellow-500" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </span>
    </button>
  );
};