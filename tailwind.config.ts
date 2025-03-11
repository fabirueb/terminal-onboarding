import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fef3f2",
          "100": "#ffe3e1",
          "200": "#ffccc9",
          "300": "#fea8a3",
          "400": "#fb766e",
          "500": "#f34a40",
          "600": "#e02b20",
          "700": "#bd2118",
          "800": "#9c2018",
          "900": "#81211b",
          "950": "#460c09",
        },
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
};
