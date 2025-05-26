/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        primary: "#0d9488", // Teal to match the logo
        secondary: "#a16207", // Warm bronze/amber
        accent: "#0891b2", // Lighter cyan
        success: "#059669", // Green that complements the palette
        warning: "#d97706", // Warm orange
        error: "#dc2626", // Red
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0d9488", // Teal from logo
          secondary: "#a16207", // Bronze/amber from logo
          accent: "#0891b2", // Complementary cyan
          neutral: "#374151", // Warm gray
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
          info: "#0891b2",
          success: "#059669",
          warning: "#d97706",
          error: "#dc2626",
        },
      },
    ],
  },
}
