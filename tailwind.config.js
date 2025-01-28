/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        callingBg: '#3d3f41',
      },
      fontFamily:{
        pretendard: ['--font-pretendard','Arial', 'Helvetica', 'sans-serif']
      }
    },
  },
  plugins: [],
}