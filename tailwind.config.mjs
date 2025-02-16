/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#128945',
        'green-light': '#8cc63e',
        'gray-dark': '#111827',
        'gray-light': '#1f2937',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.scrollbar-custom': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#8cc63e',
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: '#128945',
            },
          },
          '&::-webkit-scrollbar-button:start:decrement': {
            height: '0px',
            display: 'block',
            background: 'transparent',
          },
          '&::-webkit-scrollbar-button:end:increment': {
            height: '0px',
            display: 'block',
            background: 'transparent',
          },
          'scrollbarWidth': 'thin',
          'scrollbarColor': '#8cc63e #f1f1f1',
        },
      })
    },
  ],
};
