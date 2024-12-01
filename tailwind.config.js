/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#000",
        inputBg: "#fff",
        navFoot: "#fff",
        Btn1: "#f97316",
        Btn2: "#2563eb",
        Btn3: "rgb(22 163 74 / var(--tw-bg-opacity, 1))",
      },
      colors: {
        heading: " #f97316",
        mainHeading: "#fff",
        inputTitle: "#000",
        errorText: "red",
        navFoot: "#000",
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
