require('dotenv').config()

export default {

  mode: 'universal',
  target: 'static',

  head: {
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} - ${process.env.PAGETITLE}` : `${process.env.PAGETITLE}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        vmid: 'title',
        property: 'og:title',
        name: 'title',
        content: process.env.PAGETITLE,
        template: chunck => `${chunck} - ${process.env.PAGETITLE}`
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.DESCRIPTION || ''
      }
    ],
    link: [
      { rel: 'favicon', href: 'static/favicon.ico' }
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
    '@nuxtjs/dotenv'
  ],
  components: true
}
