/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#000",
        btnBackground: "#f97316",
        inputBg: "#fff",
      },
      colors: {
        heading: " #f97316",
        mainHeading: "#fff",
        inputTitle: "#000",
        errorText: "red",
      },
      fontSize: {
        title: "1.875rem",
        smallTitle: "1.12rem",
        inputText: "0.93rem",
      },

      fontFamily: {
        system: ["system-ui", "-apple-system", "BlinkMacSystemFont"],
      },

      lineHeight: {
        textHeight: "2.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
