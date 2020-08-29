<template>
  <article class="flex  flex-col lg:h-screen w-full">
    <div class="relative lg:h-84 sm:h-64 xs:-48 post-left">
        <img :src="article.img" :alt="article.alt" class="object-cover  object-center w-full h-full">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 class="font-bold xs:text-3xl sm:text-4xl dm:text-5xl xl:text-6xl text-center">{{article.title}}</h1>
      </div>
    </div>
    <div class="flex flex-col lg:container lg:mx-auto xs:px-4">
        <div class="flex flex-row justify-end my-2 px-2">
          <p v-if="article.createdAt === article.updatedAt" class="text-sm"> <span class="font-bold">Publicado:</span> {{formatDate(article.createdAt)}}</p>
          <p v-else class="text-sm"> <span class="font-bold">Última actualización:</span> {{formatDate(article.updatedAt)}}</p>
        </div>
        <nav class="flex flex-col self-center p-5 border border-solid boder-gray-300 rounded justify-center content-center">
          <ul class="mx-4">
            <li v-for="link of article.toc" :key="link.id">
              <nuxt-link :to="`#${link.id}`" :class="{'py-2 text-teal-700  hover:underline font-bold': link.depth===2, 'ml-2 pb-2 py-2 text-teal-600 hover:underline font-semibold': link.depth ===3}">
                {{link.text}}
              </nuxt-link>
            </li>
          </ul>
       </nav>
    <nuxt-content :document="article"/>
    </div>
  </article>
</template>

<script>
export default {

 async asyncData({$content, params}) {
   const article = await $content('articles', params.slug).fetch()
   return { article }
 },
 head(){
    return {
      title: this.article.title,
      meta: [{
        name: this.article.title,
        content: this.article.description
        }]
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

<style lang="scss">

.nuxt-content {
  @apply  my-4 px-4;
  h2 {
    @apply text-2xl font-bold
  }
  h3 {
    @apply text-xl font-bold
  }
  p {
    @apply my-6 ml-4
    }
}


</style>