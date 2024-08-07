/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ...
        "love-green": "#D4FCBC",
        "grass-green": "#349C04",
        // ...
      },
    },
  },
  plugins: [],
};
