/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      glaser: ["glaser", "sans-serif"],
    },
    extend: {
      cursor: {
        'fancy': 'url("https://cdn.custom-cursor.com/db/8878/32/starter-stain-of-paint-logo-cursor.png"), pointer',
        'pointer': 'url("https://cdn.custom-cursor.com/db/8877/32/starter-stain-of-paint-logo-pointer.png"), pointer',
      },
    },
  },
  plugins: [],
}
