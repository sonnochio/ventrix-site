/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 3s linear infinite",
      },
      fontFamily: {
        helevtica: ["Helvetica Neue", "Helvetica"],
      },
    },
  },
  plugins: [],
};
