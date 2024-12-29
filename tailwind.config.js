/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includi tutti i file JS e JSX nella cartella src
  ],
  theme: {
    extend: {
      backdropBlur: {
        sm: '4px',
      }
    }
  },
  plugins: [require('tailwindcss-motion')],
}