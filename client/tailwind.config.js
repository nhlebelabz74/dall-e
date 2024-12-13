/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)',
      },
      colors: {
        'blue': '#6469ff',
        'slate-white': '#f9fafe',
        'light-gray': '#e6ebf4',
        'dark-gray': '#222328',
        'gray': '#666e75',
        'light-lavender': '#ececf1'
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '19.5px'],
        lg: ['18px', '21.94px'],
        xl: ['20px', '24.38px'],
        '2xl': ['24px', '29.26px'],
        '3xl': ['28px', '50px'],
        '4xl': ['48px', '58px'],
        '8xl': ['96px', '106px']
      }
    }
  },
  plugins: [
    
  ]
};