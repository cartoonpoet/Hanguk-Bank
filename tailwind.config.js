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
        'Brand-Secondary': '#E6F2FF',
        'Brand-On-Tertiary': '#0062CC',
        'Neutral-Label': '#4E5968',
        'Brand-Default': '#007BFF',
        'Border-Default': '#D6DBE1',
        'Neutral-Default': '#6B7684',
        'Neutral-Tertiary': '#F2F4F6',
        'Danger-Default': '#DC3545',
      },
      fontFamily:{
        pretendard: ['--font-pretendard','Arial', 'Helvetica', 'sans-serif']
      }
    },
  },
  plugins: [],
}