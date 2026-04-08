import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      animation: {
        'bounce-x': 'bounce-x 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float-up': 'float-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(0px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))' },
        },
        'float-up': {
          '0%': { opacity: '0', transform: 'translateY(6px)', filter: 'blur(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
