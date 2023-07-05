/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#f4a226",
        "yellow-light": "#ffebb3",
        orange: "#e5771f",
        brown: "#5a3e2b",
        green: "#76c7ad",
      },
      fontFamily: {
        title: ["Monoton", "cursive"],
        primary: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        "7.5xl": [
          "5rem",
          {
            letterSpacing: "-5px",
          },
        ],
      },
      gridTemplateRows: {
        layout: "auto auto 1fr auto",
      },
      gridTemplateColumns: {
        list: "repeat(auto-fit, minmax(250px,1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
