/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: `var(--foreground)`,
        background: `var(--background)`,
        "foreground-dark": `var(--foreground-dark)`,
        "background-dark": `var(--background-dark)`,
        primary: "#eaeceb",
        secondary: "#1d1d1d",
        app: "#f2f2f7",
      },
      spacing: {
        "safe-top": 48,
        "safe-bottom": 32,
        xs: 8,
        sm: 16,
      },
    },
  },
  plugins: [],
};
