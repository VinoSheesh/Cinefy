/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo 600
        secondary: "#F59E0B", // Amber 500
        accent: "#10B981", // Emerald 500
        background: "#F3F4F6", // Gray 200
        text: "#111827", // Gray 900
        biru: {
          100: "#EFF6FF", // Blue 100
          200: "#DBEAFE", // Blue 200
          300: "#BFDBFE", // Blue 300
          400: "#93C5FD", // Blue 400
          500: "#60A5FA", // Blue 500
          600: "#3B82F6", // Blue 600
          700: "#2563EB", // Blue 700
          800: "#1D4ED8", // Blue 800
          900: "#1E40AF", // Blue 900
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}