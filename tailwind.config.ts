import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080000",
        surface: "#0f0000",
        card: "#1a0000",
        "card-hover": "#220000",
        accent: "#d4a017",
        "accent-light": "#e8b830",
        "accent-dim": "#8a6510",
        text: "#f5e6c8",
        "text-muted": "#a89070",
        "text-dim": "#6b5840",
        border: "#2a0000",
        "border-accent": "#d4a01740",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        accent: ["var(--font-caveat)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-cinematic":
          "linear-gradient(135deg, #080000 0%, #120005 50%, #080000 100%)",
        "vignette":
          "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.9) 100%)",
      },
      animation: {
        "grain": "grain 8s steps(10) infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in": "fade-in 1.2s ease-out forwards",
        "fade-up": "fade-up 1s ease-out forwards",
        "blur-in": "blur-in 1s ease-out forwards",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(2%, -1%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "60%": { transform: "translate(4%, -2%)" },
          "70%": { transform: "translate(-2%, 1%)" },
          "80%": { transform: "translate(1%, -4%)" },
          "90%": { transform: "translate(-4%, 2%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(20px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
      },
      boxShadow: {
        "glow-accent": "0 0 20px rgba(212, 160, 23, 0.3), 0 0 60px rgba(212, 160, 23, 0.1)",
        "glow-accent-strong": "0 0 30px rgba(212, 160, 23, 0.5), 0 0 80px rgba(212, 160, 23, 0.2)",
        "card": "0 4px 30px rgba(0, 0, 0, 0.8), 0 1px 0 rgba(212, 160, 23, 0.1) inset",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(212, 160, 23, 0.15)",
        "cinematic": "0 50px 100px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};

export default config;
