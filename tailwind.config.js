/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      background: "#860A35",
      headerColor: "#fff",
      homeTextColor: "#fff",
      // buttonColor: "#AF2655",
      productPageBg: "#fff",
      navBg: "#1B4242",
      searchInputBg: "#AF2655",
      searchResultBg: "#9C9C9C",
      searchResultHover: "#9C9C9C",
    },
    fontFamily: {
      headerFont: ["Bebas Neue", "sans-serif"],
      productFont: ["Noto Sans Georgian", "sans-serif"],
    },
    fontSize: {
      headerFontSize: "84px",
      textSize: "30px",
    },
    extend: {},
  },
  plugins: [],
};
