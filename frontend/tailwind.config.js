/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
