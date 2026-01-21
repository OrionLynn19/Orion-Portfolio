/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = { 
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ], 
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'xs' : '360px',
            }
        }
       
    },
    plugins: [],
}
