<template>
  <div>
    <article class="flex flex-col">
      <div class="relative lg:h-96 sm:h-64 xs:h-48 shadow-sm overflow-hidden">
        <figure>
          <nuxt-picture
            :src="`${post.img}`"
            width="3750"
            height="2500"
            sizes="sm:100vw md:50vw lg:1024px"
            fit="cover"
          />
        </figure>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        >
          <h1 class="font-bold xs:text-4xl sm:text-5xl lg:text-6xl text-center">
            {{ post.title }}
          </h1>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row sm:justify-center xs:px-4 gap-8">
        <div class="flex flex-col lg:w-1/4">
          <date :createdAt="post.createdAt" :updatedAt="post.updatedAt" />
          <navegation :toc="post.toc" />

          <tags-component :tags="post.tags" />
        </div>
        <div class="mt-3">
          <nuxt-content
            class="prose sm:prose-lg lg:prose-xl"
            :document="post"
          />
        </div>
      </div>
    </article>
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    prev: {
      type: Array,
      default: () => null
    },
    next: {
      type: Array,
      default: () => null
    }
  }
}
</script>