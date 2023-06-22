import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Tight"],
        "sans-serif": ["Inter Tight"],
      },
      padding: {
        100: "100px",
        2.25: "9px"
      },
      lineHeight: {
        "1.3": "130%",
        "1.1": "110%"
      },
      fontSize: {
        76: "76px",
        64: "64px",
        40: "40px",
        32: "32px",
      },
      width: {
        "8xl": "1440px",
        "input": "291px"
      },
      height: {
        "footer": "416px",
      },
      borderRadius: {
        4: "4px"
      },
      colors: {
        dark: {
          5: "#111112"
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
