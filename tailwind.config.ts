import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0a0a0f",
          800: "#0d0d14",
          700: "#12121c",
          600: "#1a1a2e",
          500: "#22223a",
        },
        electric: {
          blue: "#0066ff",
          light: "#3388ff",
          dark: "#0044cc",
        },
        cyber: {
          purple: "#7b2fff",
          light: "#9955ff",
          dark: "#5500cc",
        },
        neon: {
          cyan: "#00d4ff",
          light: "#33ddff",
          dark: "#00aacc",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,102,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,102,255,0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(0,102,255,0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;