/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary)/ <alpha-value>)',
        black: 'rgb(var(--black)/ <alpha-value>)',
        'gray-dark': 'rgb(var(--gray-dark)/ <alpha-value>)',
        'gray-light': 'rgb(var(--gray-light)/ <alpha-value>)',
        'gray-lighter': 'rgb(var(--gray-lighter)/ <alpha-value>)',
        dark: 'rgb(var(--dark)/ <alpha-value>)',
        'body-color': 'rgb(var(--body-color)/ <alpha-value>)',
        'body-color-dark': 'rgb(var(--body-color-dark)/ <alpha-value>)',
        'bg-color-dark': 'rgb(var(--bg-color-dark)/ <alpha-value>)'
      }
    },
  },
  plugins: [],
}

