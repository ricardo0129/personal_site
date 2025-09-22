/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        terminal: "#1e1e1e",
        accent: "#00ff95",
      },
      fontFamily: {
        mono: ["Iosevka Fixed", "monospace"],
      },
    },
  },
  plugins: [],
};
