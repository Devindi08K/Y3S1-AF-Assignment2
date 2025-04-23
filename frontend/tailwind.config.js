/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D84040',
        'primary-dark': '#111517',
        cream: '#FFFFFF',
        beige: '#F8F2DE',
      },
    },
  },
  plugins: [],
}
