<template>
  <div class="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:gap-5">
    <section
      v-for="article of articles"
      :key="article.slug"
      class="max-w-sm rounded overflow-hidden shadow-md xs:mt-4 xs:mx-2"
    >
      <div class="divide-y divide-gray-500">
        <nuxt-link :to="{ name: 'post-slug', params: { slug: article.slug } }">
          <dynamic-images
            :image="article.img"
            :alt="article.alt"
            :imageClass="'object-cover h-full w-full'"
          />
          <div class="divide-y divide-gray-500 py-2 px-4">
            <h2 class="text-center text-2xl font-bold">{{ article.title }}</h2>
            <p class="text-sm font-sans px-2 py-4">{{ article.description }}</p>
            <date class="py-2 px-3" :article="article" />
          </div>
        </nuxt-link>
        <div class="flex flex-row flex-wrap py-3 px-2">
          <tags-component :tags="article.tags" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  }
}
</script>
