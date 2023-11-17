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
        'rock-dark': 'hsl(349, 71%, 52%)',
        'rock-light': 'hsl(349, 70%, 56%)',
        'paper-dark': 'hsl(230, 89%, 62%)',
        'paper-light': 'hsl(230, 89%, 65%)',
        'scissors-light': 'hsl(40, 84%, 53%)',
        'scissors-dark': 'hsl(39, 89%, 49%)',
      },
      fontFamily: {
        text: ['"Barlow Semi Condensed"'],
      },
    },
  },
  plugins: [],
}
