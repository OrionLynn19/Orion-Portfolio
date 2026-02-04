/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = { 
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ], 
    darkMode: 'class',
    theme: {
        extend: {
            animation : {
                'spin-slow' : 'spin 8s linear infinite',
            },
            screens: {
                'xs' : '360px',
            }
        }
       
    },
    plugins: [],
}
