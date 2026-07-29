/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-space)", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        acid: "#c8ff1a",
        bone: "#f3f1e8",
        violet: "#7c5cff"
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        float: "float 7s ease-in-out infinite"
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } }
      }
    }
  },
  plugins: []
};
