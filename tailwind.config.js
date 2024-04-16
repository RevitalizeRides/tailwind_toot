/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  // variants: {
  //   backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  //   fontSize: ['responsive', 'hover']
  // },
  plugins: [],
}

