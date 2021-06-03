<template>
<div v-if="articles.length">
    <div class="text-3xl font-bold  divide-y divide-gray-500 mt-2">
      <h2> Artículos más recientes: </h2>
    </div>
    <article-cards :articles="articles"/>
    <pagination :name="`index`" :pageName="`pg-page`" :prev="prev" :next="next" />
</div>
<div v-else class="flex items-center h-full">
  <div class="text-xl lg:text-3xl font-bold">
    <p>Aún no hay articulos publicados</p>
  </div>
</div>
</template>

<script>
export default {
  layout: 'index',
  async asyncData({$content, params}) {

    const postsByPages = 4
    const pgNumber = 1
    const prev = null
    
    const articles = await $content('articles')
      .only(['title', 'description','img','alt','tags','slug', 'createdAt', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .skip(postsByPages*(pgNumber-1))
      .limit(postsByPages)
      .fetch()

    const nextpostsByPages = await $content('articles')
      .only(['title', 'description', 'img', 'alt','tags', 'slug', 'createdAt', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .skip(postsByPages*(pgNumber))
      .limit(postsByPages)
      .fetch()

      let next = null 
    if (nextpostsByPages.length >= 1) {
       next = pgNumber + 1 
    }
    
    return {
      articles,
      prev,
      next
    }
  }
}
</script>

<style>

</style>