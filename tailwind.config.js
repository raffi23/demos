/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: `var(--foreground)`,
        background: `var(--background)`,
        primary: "#eaeceb",
        secondary: "#1d1d1d",
      },
    },
  },
  plugins: [],
};
