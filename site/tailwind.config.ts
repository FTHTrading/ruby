import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "troptions-ink": "#0c0f14",
        "troptions-slate": "#151a24",
        "troptions-gold": "#c9a227",
        "troptions-gold-muted": "#8a7420",
        "troptions-cream": "#e8e4dc",
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        sans: ["system-ui", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
