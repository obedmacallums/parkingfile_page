module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans2': ['Helvetica Neue', ],


      },


      colors: {
      'primary-blue': '#011F4B',
      'secondary-blue': '#6DBBD9',
      'button-blue': '#39BDEE',
      'text-blue': '#114178',
      'footer-blue': '#082f63',
      'hover-blue': '#226EDB'
    },
    backgroundImage: theme => ({
      'top-circles': "url('~assets/img/top_circles.svg')",
      'middle-circles': "url('~assets/img/middle_circles.svg')",
      'footer_circles': "url('~assets/img/footer_circles.svg')"
      
     })
  },
  variants: {},
  plugins: [],
}
}

/* #093163 #072C5C #114077 color del circulo superior: #082f63 */
