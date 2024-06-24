/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgHero:
          "url('https://res.cloudinary.com/dk1fim9hl/image/upload/v1719261662/Tiffin%20Box/vootweiwghmxdncq1ykx.jpg')",
        bgContactUs:
          "url('https://res.cloudinary.com/dk1fim9hl/image/upload/v1719261945/Tiffin%20Box/r0cqanle8jgo7gbmrmvm.jpg')",
        bgFaq:
          "url('https://res.cloudinary.com/dk1fim9hl/image/upload/v1719261906/Tiffin%20Box/iz5jfwmnooz5xzmxe0vu.jpg')",
      },
    },
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [daisyui],
};
