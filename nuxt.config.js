export default {

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
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
  components: true
}
