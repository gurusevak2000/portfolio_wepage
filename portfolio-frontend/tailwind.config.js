/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        game: {
          bg:      '#0f0f13',
          surface: '#16161e',
          card:    '#1e1e2a',
          border:  '#2a2a3a',
          accent:  '#8b5cf6',
          accent2: '#7c3aed',
          text:    '#e8e8f0',
          muted:   '#a0a0b8',
          tag:     '#2a1f45',
          tagText: '#c4b5fd',
        },
        backend: {
          bg:      '#ffffff',
          surface: '#f8f8f8',
          card:    '#ffffff',
          border:  '#e2e2e2',
          accent:  '#2563eb',
          accent2: '#1d4ed8',
          text:    '#111111',
          muted:   '#555555',
          tag:     '#eef2ff',
          tagText: '#3730a3',
        },
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}
