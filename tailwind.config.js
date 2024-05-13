/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        swis: ["Swis721 BlkCn BT", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        impact: ["Impact", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        subtitle: "#4D5765",
      },
    },
  },
  plugins: [],
};
