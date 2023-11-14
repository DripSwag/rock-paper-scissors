/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(237, 49%, 15%)',
        border: 'hsl(217, 16%, 45%)',
        'score-heading': 'hsl(229, 64%, 46%)',
        'score-value': 'hsl(229, 25%, 31%)'
      },
      fontFamily: {
        'text': ['"Barlow Semi Condensed"']
      }
    },
  },
  plugins: [],
}

