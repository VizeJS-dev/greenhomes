/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenhomes-white':'#fbfaff',
        'greenhomes-gray':'#D7D9D8',
        'greenhomes-green':'#597351',
        'greenhomes-darkgreen':'#45593F',
        'greenhomes-orange':'#45593F',
        'greenhomes-lightgreen':'#99A68D',
      }
    },
  },
  plugins: [],
}
