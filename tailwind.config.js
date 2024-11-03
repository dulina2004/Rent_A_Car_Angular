/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
    // Overriding the default colors with custom colors only
    colors: {
      cust_grey: "#abb2bf",
      cust_grey_dark: "#2c3036",
      cust_background: "#282c33",
      cust_pink: "#c778dd",
      cust_white: "#fff",
    },
  },
  plugins: [],
};
