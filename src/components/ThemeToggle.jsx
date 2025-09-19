import React, { useEffect, useState } from 'react';

const DARK_THEME = {
  '--primary-pink': '#ff5c8a',
  '--primary-pink-dark': '#e02e5a',
  '--accent-yellow': '#ffe066',
  '--gray-bg': '#181a1b',
  '--text-dark': '#fff',
  '--text-light': '#181a1b',
};
const LIGHT_THEME = {
  '--primary-pink': '#ff3e6c',
  '--primary-pink-dark': '#e02e5a',
  '--accent-yellow': '#ffe066',
  '--gray-bg': '#f7f7fa',
  '--text-dark': '#22223b',
  '--text-light': '#fff',
};

function setThemeVars(vars, mode) {
  Object.entries(vars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(mode);
}

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setThemeVars(dark ? DARK_THEME : LIGHT_THEME, dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      aria-label={dark ? 'Switch to day mode' : 'Switch to dark mode'}
      onClick={() => setDark((d) => !d)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        marginLeft: '1rem',
        color: 'var(--primary-pink)',
      }}
      title={dark ? 'Switch to day mode' : 'Switch to dark mode'}
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
