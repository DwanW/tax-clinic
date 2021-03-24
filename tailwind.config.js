module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // default
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        menuFadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        menuFadeOut: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "100%": { opacity: 0, transform: "scale(0.95)" },
        },
      },
      animation: {
        menuFadeIn: "menuFadeIn 0.2s ease-out 1 forwards",
        menuFadeOut: "menuFadeOut 0.1s ease-in 1 forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
