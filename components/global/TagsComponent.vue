<template>
  <div>
    <div
      v-for="tag of tags"
      :key="tag.id"
      class="inline-block rounded-full ml-2 mt-1 px-2 py-1 bg-red-800 text-gray-100 hover:text-gray-900 hover:bg-red-300"
    >
      <nuxt-link :to="{ name: 'tags-tag', params: { tag: tag.name } }">
        <span class="italic">#</span>{{ tag.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      types: Array,
      required: true
    }
  }
}
</script>

<style>
</style>