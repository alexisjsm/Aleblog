<template>
  <div>
    <post :post="article" :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  layout: 'post',
  transition: 'slide',

  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return { article, prev, next }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: ` ${this.article.title} - ${process.env.PAGE_TITLE}`
        },
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: ` ${this.article.title} - ${process.env.PAGE_TITLE}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          hid: 'article:author',
          property: 'article:author',
          content: this.article.author || ''
        },
        {
          hid: 'article:author',
          property: 'article:author',
          content: this.article.author || ''
        },
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: this.article.createdAt
        },
        {
          hid: 'article:modified_time ',
          property: 'article:modified_time ',
          content: this.article.updatedAt
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content:
            process.env.NODE_ENV === 'production'
              ? `${process.env.HOSTNAME}/post/${this.article.slug}`
              : `${this.article.slug}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            process.env.NODE_ENV === 'production'
              ? `${process.env.HOSTNAME}${this.$img(`${this.article.img}`, {
                  width: 1024
                })}`
              : `${this.$img(`${this.article.img}`, { width: 1024 })}`
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `${this.article.title} - ${process.env.PAGE_TITLE}`
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content:
            process.env.NODE_ENV === 'production'
              ? `${process.env.HOSTNAME}${this.$img(`${this.article.img}`, {
                  width: 1024
                })}`
              : `${this.$img(`${this.article.img}`, { width: 1024 })}`
        },
        {
          hid: 'twitter:image:alt',
          property: 'twitter:image:alt',
          name: 'image:alt',
          content: `${this.article.alt}`
        }
      ]
    }
  }
}
</script>
