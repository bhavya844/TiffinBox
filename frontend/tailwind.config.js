/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgHero: "url('/src/assets/image5.jpg')",
        bgContactUs: "url('/src/assets/contact-us-cover-picture.jpg')",
        bgFaq: "url('/src/assets/faq-cover-picture.jpg')",
      },
    },
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [daisyui],
};
