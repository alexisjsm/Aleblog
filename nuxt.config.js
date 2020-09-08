require('dotenv').config()

export default {

  mode: 'universal',
  target: 'static',

  head: {
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} - ${process.env.TITLE}` : `${process.env.TITLE}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'title',
        property: 'og:title',
        name: 'title',
        content: process.env.TITLE
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DESCRIPTION || ''
      },
      {
        hid: 'image',
        name: 'image',
        property: 'og:image',
        content: '/favicon.png'
      }
    ],
    link: [
      { rel: 'favicon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/scss/nuxt-content.scss'
  ],
  content: {
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
    '@nuxtjs/dotenv' ],
  components: true
}
