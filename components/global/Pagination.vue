<template>
  <div class="flex justify-between mt-8">
        <nuxt-link v-if="prev === 1"
          :to="{name: name, params: {tag: tag}}"
          class="text-teal-600 font-bold hover:underline text-sm"
        >
            <svg class="h-6 w-6 float-left ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Prev
      </nuxt-link>
    
        <nuxt-link v-else-if="prev"
          :to="{name: pageName, params:{page: prev, tag: tag}}"
          class="text-teal-600 font-bold hover:underline text-sm"
        >
            <svg class="h-6 w-6 float-left ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Prev
      </nuxt-link>
      <span v-else>&nbsp;</span>
      <nuxt-link v-if="next"
      :to="{name: pageName, params:{page: next, tag: tag}}"
      class="text-teal-600 font-bold hover:underline text-sm"
      >
        <svg class="h-6 w-6 float-right mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        Next
      </nuxt-link>
  </div>
</template>

<script>
export default {

props: {
  prev: {
    type: Number,
    default: () => null
  },
  next: {
    type: Number,
    default: () => null
  },
  pageName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: () => null
  }
}

}
</script>

<style>

</style>