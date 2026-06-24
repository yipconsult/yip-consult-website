/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a3e72',
          light: '#2559a0',
          dark: '#122b50',
        },
        surface: {
          DEFAULT: '#0d0d0d',
          light: '#1a1a1a',
        },
      },
      fontFamily: {
        heading: ['Figtree', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        snug: '-0.04em',
      },
      lineHeight: {
        tight: '1.1',
      },
    },
  },
  plugins: [],
};
