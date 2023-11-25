/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-light': 'hsl(214, 47%, 23%)',
        'background-dark': 'hsl(237, 49%, 15%)',
        border: 'hsl(217, 16%, 45%)',
        'score-heading': 'hsl(229, 64%, 46%)',
        'score-value': 'hsl(229, 25%, 31%)',
        'rock-shadow': 'hsl(348, 77%, 35%)',
        'paper-shadow': 'hsl(229, 65%, 46%)',
        'scissors-shadow': 'hsl(29, 80%, 43%)',
      },
      fontFamily: {
        text: ['"Barlow Semi Condensed"'],
      },
    },
  },
  plugins: [],
}
