// Tailwind config
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#4D96FF',
        neonPurple: '#A259FF'
      },
      fontFamily: {
        'futuristic': ['Orbitron', 'sans-serif']
      }
    }
  },
  plugins: []
};
