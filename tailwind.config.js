/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#2c1e97",
          300: "#170c6c",
          900: "#3419c0",
        },
      },
    },
  },
  plugins: [],
};
