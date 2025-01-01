const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '520px',
      },
      fontFamily: {
        sans: [
          '"Reddit Sans"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif"
        ],
        serif: [
          '"Source Serif 4"',
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif"
        ],
        mono: [
          '"Reddit Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ],
      },
    },
  },
  plugins: [plugin(({ addVariant }) => {
    addVariant('forest', '.forest &')
    addVariant('ocean', '.ocean &')
    addVariant('pink', '.pink &')
  })],
}