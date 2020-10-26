<template>
  <nav
    v-if="toc.length"
    class="block lg:inline-block self-center p-2 border border-gray-500 rounded lg:mt-5 w-full"
  >
    <ul>
      <li v-for="link of toc" :key="link.id" class="mt-2 lg:text-lg">
        <nuxt-link
          :to="`#${link.id}`"
          :class="{
            'py-2 text-blue-900  hover:underline font-semibold':
              link.depth === 2,
            'ml-2 pb-2 py-2  text-blue-800 hover:underline font-medium':
              link.depth === 3
          }"
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