/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**.{html,js,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: 'synthwave'
  }
}
