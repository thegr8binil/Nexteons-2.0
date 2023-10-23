/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
        "11xl": "112rem",
        "12xl": "120rem",
        "13xl": "128rem",
        "14xl": "136rem",
        "15xl": "144rem",
        "16xl": "152rem",
      },
      colors: {
        background: "#10100E",
        primarytext: "#00000",
        accento: "#FAAD39",
        accentb: "#1189C0",
        accentl: "#FFFFE3",
        accentc: "#17F1D1",
        accentp: "#EE46D3",
        bline: "#323228",
        green: "#37C713",
        bgcard: "#191917",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
