/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/container-queries")],
};
