/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      transitionDuration: {
        20000: "20000ms",
      },
    },
  },
  plugins: [],
};
