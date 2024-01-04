/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  ...tailwindConfig,
  theme: {
    ...tailwindConfig.theme,
    // Add any additional theme configurations for withMT here
  },
});
