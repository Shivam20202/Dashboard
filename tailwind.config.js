/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React components and pages
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // Example primary color (you can customize this)
        background: "#F4F6F9", // Light background color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern font for clean design
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
