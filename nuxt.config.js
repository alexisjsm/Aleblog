require('dotenv').config()

export default {

  ssr: true,
  target: 'static',
  components: true,

  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  head: {
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} - ${process.env.TITLE}` : `${process.env.TITLE}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        name: 'title',
        content: process.env.TITLE || ''
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DESCRIPTION || ''
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.TITLE || ''
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.DESCRIPTION || ''
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'blog'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.NODE_ENV === 'production' ? `${process.env.HOSTNAME}` : ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: process.env.NODE_ENV === 'production' ? `${process.env.HOSTNAME}/logo.png` : '/logo.png'
      }
    ],
    link: [
      { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~/assets/scss/main.scss'],
  content: {
    liveEdit: false,
    nestedProperties: ['tags.name'],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css'
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  buildModules: [
    '@nuxtjs/dotenv',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    inlineImageLimit: -1,
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'responsive-loader',
    responsive: {
      adapter: require('responsive-loader/sharp'),
      quality: 70
    },
    mozjpeg: {
      quality: 75
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 70
    }
  },
}
