// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--text)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
      },
    },
  },
  plugins: [],
};
