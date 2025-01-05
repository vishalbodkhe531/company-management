/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        background: "#1f2937",
        inputBg: "#fff",
        navFoot: "#fff",
        Btn1: "#f97316",
        Btn2: "#2563eb",
        Btn3: "rgb(22 163 74 / var(--tw-bg-opacity, 1))",
        contentBg: "#374151",
      },
      colors: {
        heading: " #f97316",
        mainHeading: "#000",
        inputTitle: "#000",
        errorText: "red",
        navFoot: "#000",
        btnGradientFrom: "#10b981", // Green
        btnGradientTo: "#3b82f6", // Blue
        btnOrangeFrom: "#f97316", // Bright orange
        btnOrangeTo: "#ea580c", // Warm reddish-orange
      },
      fontSize: {
        title: "1.875rem",
        smallTitle: "1.12rem",
        inputText: "0.95rem",
      },

      fontFamily: {
        system: ["system-ui", "-apple-system", "BlinkMacSystemFont"],
      },

      lineHeight: {
        textHeight: "2.25rem",
      },

      animation: {
        expandWave1: "expandWave 4s ease-out infinite",
        expandWave2: "expandWave 5s ease-out infinite",
        expandWave3: "expandWave 6s ease-out infinite",
      },
      keyframes: {
        expandWave: {
          "0%": {
            transform: "scale(0)",
            opacity: 0.6,
          },
          "50%": {
            transform: "scale(1.5)",
            opacity: 0.4,
          },
          "100%": {
            transform: "scale(3)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
