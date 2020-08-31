<template>
<header class="bg-teal-500 sm:flex sm:justify-between sm:py-2 sm:px-4  shadow-inner">
  <div class="flex justify-between py-2 px-4 items-center ">
    <div>
      <p class="text-white font-bold text-3xl"> Ale Blog </p>
    </div>
    <div class="sm:hidden">
      <button @click="isActive = !isActive" type="button" class="text-white focus:text-gray-800">
        <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isActive" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-if="isActive" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
   <div :class="isActive ? 'block' : 'hidden'" class="pb-4 pt-2 sm:flex">
        <nuxt-link to="/" class=" block sm:block-inline text-white font-semibold hover:bg-teal-400 px-4  py-2 rounded  sm:mt-0 ">
          <svg class="h-6 w-6 sm:float-right sm:ml-2 float-left mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>

          <span> Home </span>          
        </nuxt-link>
        <nuxt-link to="/About" class=" block sm:block-inline text-white font-semibold hover:bg-teal-400 px-4  py-2 mt-1 rounded sm:mt-0 ">
          <svg class="h-6 w-6 sm:float-right float-left mr-2 sm:ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          About
        </nuxt-link>
    </div>
</header>
</template>

<script>
export default {

  data: () => ({
    isActive: false
  })

}
</script>

<style>

</style>