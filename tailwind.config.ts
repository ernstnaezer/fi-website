import type { Config } from "tailwindcss";

export default {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pearl: "#FBFCF8",
        salt: "#F8EEEC",
        ink: "#353B31",
        muted: "#62675E",
        line: "#DEDED5",
        clay: "#915239",
        sage: "#53624B",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
