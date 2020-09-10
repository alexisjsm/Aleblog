<template>
  <article class="flex  flex-col lg:h-screen w-full">
    <div class="relative lg:h-84 sm:h-64 xs:-48 post-left shadow-sm">
      <dynamic-images :image="article.img" :alt="article.alt" :imageClass="'h-full w-full object-cover'" />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 class="font-bold xs:text-3xl sm:text-4xl dm:text-5xl xl:text-6xl text-center">{{article.title}}</h1>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:mx-auto xs:px-4">
      <div class="lg:flex lg:flex-col">
        <date class="flex flex-row justify-end my-2 px-2" :article="article"/>
        <nav v-if="article.toc.length" class="block lg:inline-block self-center p-2 border border-gray-500 rounded justify-center content-center lg:mt-5 lg:max-w-md">
          <ul>
            <li v-for="link of article.toc" :key="link.id" class="mt-2">
              <nuxt-link :to="`#${link.id}`" :class="{'py-2 text-blue-900 hover:underline font-semibold': link.depth===2, 'ml-2 pb-2 py-2 text-blue-800 hover:underline font-medium': link.depth ===3}">
                {{link.text}}
              </nuxt-link>
            </li>
          </ul>
       </nav>
      <div class="flex flex-row flex-wrap justify-center lg:self-center lg:w-1/3">
        <div v-for="tag of article.tags" :key="tag.id" 
        class="inline-block rounded-full ml-2 mt-4 px-3 py-1
         bg-red-800  text-gray-200 hover:text-gray-900 hover:bg-red-300
        " >
          <nuxt-link :to="{name:'tags-tag', params:{tag: tag.name}}">
          <span class="font-hairline">#</span>{{tag.name}}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="lg:flex lg:flex-col lg:container lg:mx-auto">
    <nuxt-content :document="article"/>
    <prev-next :prev="prev" :next="next"/>
    </div>
  </div>
  </article>
</template>

<script>
export default {
  layout: 'post',
  transition: 'slide',

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
        hid: 'title',
        property: 'og:title',
        name: 'title',
        content:` ${this.article.title} - ${process.env.PAGETITLE}`,
        },
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'image',
          property: 'og:image',
          name: 'image',
          content: `${require(`~/assets${this.article.img}`)}`
        }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>

.slide{
  &-enter-active, &-enter-leave-active {
    animation: slide-coming .5s ease-in;
  }
}

@keyframes slide-coming {
  0%{
    transform: translateX(-500px);
    transform: skewX(-18deg);
    opacity: 0;
  }
  36%{
    transform: translateX(-166px);
    transform: skewX(-9deg);
  }
  54%{
    transform: translateX(-18px);
    opacity: 1;
  }
  78%{
    transform: translateX(0px);
  }
  100%{
    transform: skewX(0px);
  }
}




</style>