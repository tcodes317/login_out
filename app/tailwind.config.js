/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        desk_ii: "1440px",
        desk: "1240px",
      }
    },
  },
  plugins: [],
}

