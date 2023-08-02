/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{

        primary: '#008ECC',
        background : '#F5F5F5',
        navtext : '#666666',
        inactiveColor: '#F3F9FB',
      },
      height:{
        xl:'550px',
        lg:'550px',
        md:'450px',
        sm:'400px',


      }
    },
  },
  plugins: [],
}

