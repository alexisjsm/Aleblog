<template>
<div class="flex flex-col">
  <div class="text-3xl text-left font-bold  divide-y divide-gray-500">
    <h2> more Posts</h2>
  <nuxt-child/>    
  </div>
  <section v-for="article of articles" :key="article.slug"
  class="max-w-sm lg:max-w-lg rounded overflow-hidden shadow-md mt-4 mx-2">
    <div>
      <nuxt-link :to="{name: 'post-slug', params: {slug: article.slug}}">
        <img :src="article.img" :alt="article.alt" 
        class="object-cover w-full"
        >
        <div class=" divide-y divide-gray-500 py-2 px-4">
          <h2 class="text-center text-lg  font-bold"> {{article.title}} </h2>
          <p class="text-sm font-light px-2 py-4" > {{article.description}}</p>
        <div class="flex py-2 px-3">
          <p class="text-sm" v-if="article.createdAt === article.updatedAt"><span class="font-bold self-start">Publicado: </span>{{formatDate(article.createdAt)}}</p>
          <p class="text-sm" v-else><span class="font-bold self-start">Última Actualización: </span>{{formatDate(article.updatedAt)}}</p>  
          </div>
        </div>
      </nuxt-link>
    </div>
  </section>
  <pagination :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  layout: 'index',
  async asyncData({$content, params }) {

    const postsByPages = +5
    const pgNumber = +params.page
    const prev = pgNumber - 1

    const articles = await $content('articles')
      .only(['title', 'description','img','alt','slug','createdAt','updatedAt'])
      .sortBy('createdAt', 'desc')
      .skip(postsByPages*(pgNumber-1))
      .limit(postsByPages)
      .fetch()
    
    const nextpostsByPages = await $content('articles')
      .only(['title', 'description', 'img', 'alt', 'slug', 'createdAt','updatedAt'])
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
  },
 methods: {
   formatDate(date){
     const options = {year:'numeric',month:'long',day:'numeric'}
     return new Date(date).toLocaleDateString('es', options)
   },
 }
}
</script>

<style>

</style>