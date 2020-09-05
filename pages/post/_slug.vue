<template>
  <article class="flex  flex-col lg:h-screen w-full">
    <div class="relative lg:h-84 sm:h-64 xs:-48 post-left shadow-sm">
        <img :src="article.img" :alt="article.alt" class="object-cover  object-center w-full h-full">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 class="font-bold xs:text-3xl sm:text-4xl dm:text-5xl xl:text-6xl text-center">{{article.title}}</h1>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:mx-auto xs:px-4">
      <div class="lg:flex lg:flex-col">
        <date class="flex flex-row justify-end my-2 px-2" :article="article"/>
        <nav class="flex flex-col lg:flex-row self-center p-2 border border-solid boder-gray-300 rounded justify-center content-center lg:mt-5">
          <ul>
            <li v-for="link of article.toc" :key="link.id" class="mt-2">
              <nuxt-link :to="`#${link.id}`" :class="{'py-2 text-teal-700  hover:underline font-bold': link.depth===2, 'ml-2 pb-2 py-2 text-teal-600 hover:underline font-semibold': link.depth ===3}">
                {{link.text}}
              </nuxt-link>
            </li>
          </ul>
       </nav>
      <div class="flex flex-row flex-wrap justify-center lg:self-center lg:w-1/3">
        <div v-for="tag of article.tags" :key="tag.id" 
        class="inline-block rounded-full ml-2 mt-4 px-3 py-1
        bg-red-500 hover:bg-red-300 text-white
        " >
          <nuxt-link :to="{name:'tags-tag', params:{tag: tag.name}}">
          <span class="font-hairline">#</span>{{tag.name}}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="lg:container lg:flex lg:flex-col">
    <nuxt-content :document="article"/>
    <prev-next :prev="prev" :next="next"/>
    </div>
  </div>
  </article>
</template>

<script>
export default {
  layout: 'post',
  
 async asyncData({$content, params}) {
   const article = await $content('articles', params.slug)
          .fetch()
   const [prev,next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt','asc')
        .surround(params.slug)
        .fetch()
   return { article, prev, next }
 },
 head(){
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
        ]
    }
  }
}
</script>

<style lang="scss">





</style>