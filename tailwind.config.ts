import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fcf4f4",
          "100": "#f8e9e8",
          "200": "#f3d7d5",
          "300": "#eabab7",
          "400": "#dd918c",
          "500": "#cc6d67",
          "600": "#aa4a44",
          "700": "#99413c",
          "800": "#7f3935",
          "900": "#6b3431",
          "950": "#391816",
        },
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
};
