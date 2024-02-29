/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#fff8f0",
        secondary: "#fec377",
        complementary: "#fd9f2d",
        green : "#569310",
        body: "#ffffff",
      },
    
      zIndex: {
        "minus": "-1"
      },

    },
  },
  plugins: [],
}

