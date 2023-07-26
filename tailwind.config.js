/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#0648D7",
        },
        gray: {
          100: "#F8F8F9",
          200: "#687684",
          bg: "rgba(104, 118, 132, 0.08)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
