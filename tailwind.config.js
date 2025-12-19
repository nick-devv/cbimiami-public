/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xs: "440px",
        sm: "640px",
        md: "768px",
        lg: "980px",
        xl: "1140px",
        "2xl": "1600px",
      },
      padding: {
        DEFAULT: "20px",
        sm: "20px",
        md: "28px",
        lg: "0",
        xl: "0",
        "2xl": "0",
      },
    },
    extend: {
      colors: {
        primary: "#7A61F5",
        "primary-dark": "#352D62",
        "primary-darker": "#3F2F91",
        "primary-light": "#F0EEF7",
        secondary: "#F71068",
        white: "#FFFFFF",
        green: "#48AD6ECC",
      },
      fontFamily: {
        sans: ["\"Public Sans\"", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["\"Barlow\"", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        "space-xl": "60px",
        "space-lg": "40px",
        "space-md": "28px",
        "space-base": "20px",
        "space-sm": "16px",
        "space-xs": "12px",
      },
      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "32px",
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "44px",
        "6xl": "63px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 16s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

