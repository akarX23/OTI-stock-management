/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './page/**/*.{js,ts,jsx,tsx}',
    './widgets/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // https://vercel.com/design/color
      colors: {
        primary: '#3D4852',
        secondary: '#F6E05E',
        accent: '#1C1C1C',

        // Gray colors
        'gray-100': '#F7FAFC',
        'gray-200': '#EDF2F7',
        'gray-300': '#E2E8F0',
        'gray-400': '#CBD5E0',
        'gray-500': '#A0AEC0',
        'gray-600': '#718096',
        'gray-700': '#4A5568',
        'gray-800': '#2D3748',
        'gray-900': '#1A202C',

        // Blue colors
        'blue-100': '#EBF8FF',
        'blue-200': '#BEE3F8',
        'blue-300': '#90CDF4',
        'blue-400': '#63B3ED',
        'blue-500': '#4299E1',
        'blue-600': '#3182CE',
        'blue-700': '#2B6CB0',
        'blue-800': '#2C5282',
        'blue-900': '#2A4365',

        // Green colors
        'green-100': '#F0FFF4',
        'green-200': '#C6F6D5',
        'green-300': '#9AE6B4',
        'green-400': '#68D391',
        'green-500': '#48BB78',
        'green-600': '#38A169',
        'green-700': '#2F855A',
        'green-800': '#276749',
        'green-900': '#22543D',

        // Red colors
        'red-100': '#FFF5F5',
        'red-200': '#FED7D7',
        'red-300': '#FEB2B2',
        'red-400': '#FC8181',
        'red-500': '#F56565',
        'red-600': '#E53E3E',
        'red-700': '#C53030',
        'red-800': '#9B2C2C',
        'red-900': '#742A2A',

        // Yellow colors
        'yellow-100': '#FFFFF0',
        'yellow-200': '#FEFCBF',
        'yellow-300': '#FAF089',
        'yellow-400': '#F6E05E',
        'yellow-500': '#ECC94B',
        'yellow-600': '#D69E2E',
        'yellow-700': '#B7791F',
        'yellow-800': '#975A16',
        'yellow-900': '#744210',
      },
    },
  },
};
