/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
      "pages-enter",
      "pages-enter-active",
      "pages-exit",
      "pages-exit-active",
  ],
  plugins: [],
}

