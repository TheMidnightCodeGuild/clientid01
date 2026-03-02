/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        theme1: " #3D3E65",
        theme2: "#178d44",
      },
    },
  },
  plugins: [],
};
