
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {

    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      listStyleType: {
        circle: 'circle',
        alpha: 'lower-alpha'
      },
      height: {
        84: '22rem'
      },
      colors: {
        primary: '#2C7A7B',
        black: {
          100: '#14151A'
        }
      }
    },
    inset: {
      0: '0px',
      8: '8px',
      16: '16px',
      32: '32px',
      '1/2': '50%'
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
