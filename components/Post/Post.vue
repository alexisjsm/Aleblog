<template>
<div>
      <article class="flex flex-col">
      <div class="relative lg:h-84 sm:h-64 xs:-48 post-left shadow-sm">
        <dynamic-images
          :image="post.img"
          :alt="post.alt"
          :imageClass="'h-full w-full object-cover'"
        />
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
        >
          <h1 class="font-bold xs:text-4xl sm:text-5xl lg:text-6xl text-center">
            {{ post.title }}
          </h1>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row sm:justify-center xs:px-4">
        <div class="flex flex-col lg:w-1/4">
          <date
            :createdAt="post.createdAt"
            :updatedAt="post.updatedAt"
          />
          <navegation :toc="post.toc"/>
          <div
            class="flex flex-row flex-wrap justify-center lg:self-center lg:w-1/3"
          >
            <tags-component :tags="post.tags" />
          </div>
        </div>
        <nuxt-content class="prose sm:prose-lg sm:w-9/12 lg:prose-xl" :document="post" />
      </div>
    </article>
    <prev-next :prev="prev" :next="next" />
</div>
</template>

<script>
export default {
  props:{
    post: {
      type: Object,
      required: true,
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

<style>

</style>