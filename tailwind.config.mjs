/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(89.38deg, #F20493 4.32%, #9616C4 93.14%)",
      },
      borderColor: {
        "gradient-border": "linear-gradient(45deg, #EE0BD7 0%, #9616C4 100%)",
      },
      boxShadow: {
        custom: "0px 0px 18px 0px #FAFAFAB2",
      },
    },
  },
  plugins: [],
};
