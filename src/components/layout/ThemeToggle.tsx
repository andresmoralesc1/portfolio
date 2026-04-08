'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      setIsDark(false);
    } else {
      html.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="relative w-14 h-7 rounded-full bg-neutral-800 border border-neutral-700 transition-colors hover:border-neutral-600"
      aria-label="Toggle theme"
    >
      <motion.span
        animate={{ x: isDark ? 4 : 28 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 w-5 h-5 rounded-full bg-neutral-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
