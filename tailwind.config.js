export default  {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 1.5s ease-in-out',
        fade2: 'fadeOut 2s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          // '0%': { backgroundColor: theme('colors.red.300') },
          // '100%': { backgroundColor: theme('colors.amber.300') },
          '0%': {opacity: '0'},
          '100%': {opacity: '100'}
        },
      }),
    },
  },
  plugins: [

  ],
}