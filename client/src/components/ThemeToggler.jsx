import React from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from '../hooks/useTheme';

const ThemeToggler = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <HiSun className="w-6 h-6 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <HiMoon className="w-6 h-6 transition-transform duration-300 hover:rotate-45" />
      )}
    </button>
  );
};

export default ThemeToggler;