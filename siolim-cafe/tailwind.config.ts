import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { cream: "#F8F4EE", gold: "#C89B3C", cocoa: "#8B5E34", forest: "#3E4E3C", ink: "#111827" }, fontFamily: { display: ["var(--font-playfair)", "Georgia", "serif"], sans: ["var(--font-inter)", "Arial", "sans-serif"] }, boxShadow: { soft: "0 18px 55px rgba(35, 29, 20, .09)" } } }, plugins: [] };
export default config;
