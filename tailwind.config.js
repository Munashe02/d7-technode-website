/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eef3',
          100: '#ccdde7',
          200: '#99bbcf',
          300: '#6699b8',
          400: '#3377a0',
          500: '#005588',
          600: '#00446d',
          700: '#003150',
          800: '#00253d',
          900: '#001827',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        accent: {
          lime: '#d4ff00',
          yellow: '#ffed00',
          blue: '#003150',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Arial', 'Helvetica', 'system-ui', 'sans-serif'],
        heading: ['Manrope', 'Arial', 'Helvetica', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
