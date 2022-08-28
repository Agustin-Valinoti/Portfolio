/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#EB5E28',
        background: '#403D39',
        detailWhite: '#FFFCF2',
        detailGrey: '#CCC5B9',
        detailBlack: '#252422'
      },
      backgroundImage: theme => ({
        'footer-bg': 'url(./assets/backgrounds/WaveFooter.svg)'
      })
    },
  },
  plugins: [require("daisyui")],
}
