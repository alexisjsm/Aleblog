<template>
  <nav
    v-if="toc.length"
    class="p-2"
  >
    <ul>
      <li v-for="link of toc" :key="link.id" class="lg:text-lg">
        <nuxt-link
          :to="`#${link.id}`"
          :class="{
            'text-blue-900  font-semibold':
              link.depth === 2,
            'text-blue-800 font-light space-x-10 ml-3':
              link.depth === 3
            }"
          class="block bg-gray-200 rounded p-2 my-2 hover:bg-gray-100"
        >
          {{ link.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>