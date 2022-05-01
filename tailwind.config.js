const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Decima Mono Pro', ...defaultTheme.fontFamily.mono],
      },
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
  },
  plugins: [],
}