/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      colors: {
        background: "rgba(var(--background))",
        "nav-button-active": "rgb(var(--nav-button-active))",
        "nav-button": "rgb(var(--nav-button))",
        "nav-text": "rgb(var(--nav-text))",
        "nav-text-active": "rgb(var(--nav-text-active))",
      }
    },
  },
  plugins: [],
}

