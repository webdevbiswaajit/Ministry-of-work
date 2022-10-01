/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./klnhln.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato",
      },
      colors: {
        blue: "#3993DD",
        ash: "#F0F4EF",
        black: "#253237",
        light_black: "#141125",
        nav_shadow: "2px 2px 4px rgba(0, 0, 0, 0.2);",
        card_shadow: "3px 3px 5px rgba(37, 50, 55, 0.2);",
      },
      backgroundImage: {
        hero: "url('../img/hero.jpg')",
      },
      spacing: {
        700: "40rem",
        300: "18.75",
      },
      borderRadius: {
        card_radius: "0px 0px 5px 5px",
      },
      listStyleType: { circle: "circle" },
    },
  },
  plugins: [],
};
