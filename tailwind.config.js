/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sideBarColor: "#d3d3d3",
        linkBorderColor: "#add8e6",
        linkActiveColor: "#4f5255",
        headerColor: "#808080",
        customFontColor: "#000080",
        blockQuoteBorder: "#800080",
      },
    },
  },
  plugins: [],
};
