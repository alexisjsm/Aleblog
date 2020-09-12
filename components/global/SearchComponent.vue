<template>
  <div>
   <button @click="isActive = !isActive" class="block sm:inline-block  rounded text-white font-semibold hover:bg-teal-500 hover:text-black-100 px-4 py-2 text-left  w-full focus:outline-none">
     <svg class="w-6 h-6 float-left mr-2 sm:float-right sm:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
     Search
   </button>
  <transition name="fade-in" appear>
    <div :class="isActive ? 'block' : 'hidden'" class="z-40 fixed left-0 top-0  lg:w-screen lg:h-screen w-full h-full p-16 overflow-auto bg-gray-800 bg-opacity-50 lg:p-64" @click="isActive = false">
    </div>
  </transition>
  <transition name="fade-in" appear>
    <div v-show="isActive" class=" z-50 fixed left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2  flex flex-col justify-center
    bg-gray-400 px-4 py-2 rounded-lg mx-auto lg:w-1/3">
        <div class="flex flex-row justify-between">
          <div class="px-2 py-1  lg:text-2xl text-xl font-semibold">
            <p>Buscar articulos</p>
          </div>
          <div>
            <button @click="isActive = !isActive" class="text-red-500 bg-white rounded-full  focus:outline-none shadow">
              <svg  class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
          <div class="block sm:inline-block">
          <input type="search" autocomplete="off" v-model="query" class="lg:text-lg rounded p-2 focus:outline-none focus:border-gray-600  focus:border w-full shadow">
          <ul v-if="articles.length" class="lg:text-2xl mt-2">
            <li v-for="article of articles" :key="article.slug">
              <nuxt-link :to="{name:'post-slug', params:{slug: article.slug}}" class="inline-block w-full bg-gray-200 text-gray-900 hover:bg-gray-100 hover:text-gray-800  rounded mt-2 px-1 py-2 shadow">
                {{article.title}}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
  </transition>
</div>
</template> 

<script>
export default {
  data: () => ({
    query: '',
    articles: [],
    isActive: false
  }),

  watch: {

    async query(query) {
      if(!query) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
      .limit(6)
      .only(['title','slug'])
      .without(['body'])
      .search(query)
      .fetch()
    }
  },

}
</script>

<style lang="scss" scoped>

.fade-in{
  &-enter-active{
    transition: opacity .3s ;
}
  &-enter{
   opacity: 0;    
  }
  &-leave-active {
    opacity: 0;
    transition: all .3s;
  }
  &-leave{
    transition: opacity .3s;
  }

}


</style>