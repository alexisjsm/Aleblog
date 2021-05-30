require('dotenv').config()

export default {

  ssr: true,
  target: 'static',
  components: {
		dirs: [
			'~/components/Index',
			'~/components/Post'
		]
	},

  layoutTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  robots: [
  {
    UserAgent: '*',
    Allow: '/'
  }],

  head: {
    htmlAttrs: {
      lang: 'es'
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
        hid: 'og:url',
        property: 'og:url',
        content: process.env.NODE_ENV === 'production' ? `${process.env.HOSTNAME}` : ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: process.env.NODE_ENV === 'production' ? `${process.env.HOSTNAME}/logo.png` : '/logo.png'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: `${process.env.TITLE}`
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: `${process.env.DESCRIPTION}`
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: process.env.NODE_ENV === 'production' ? `${process.env.HOSTNAME}/logo.png` : '/logo.png'
      }
    ],
    link: [
      { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ['~assets/css/main.css'],
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots'
  ],
  buildModules: [
    '@nuxtjs/dotenv',
  ],
}
