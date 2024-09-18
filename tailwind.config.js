/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./images/rayquaza-backdrop.jpg')",
        mobileHome: "url('./images/rayquaza.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

