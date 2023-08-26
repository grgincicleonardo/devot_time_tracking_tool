/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      // main: "#070B16",
      dark: "#181846",
      orange: "#FF5722",
      whisper: "#ECEDF5",
      ghost: "#C4C5D7",
      ebony: "#0C0D25",
      lynch: "#5F6B8A",
    },
    fontSize: {
      xs: ["12px", { lineHeight: "20px", letterSpacing: "0.03em" }],
      base: ["16px", { lineHeight: "32px" }],
      md: ["25.89px", { lineHeight: "41.1px" }],
      lg: ["41.89px", { lineHeight: "68px" }],
      xl: ["67.77px", { lineHeight: "81.3px" }],
    },
    container: {
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
