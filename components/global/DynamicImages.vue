<template>
        <picture>
          <source  :srcset="require(`~/assets${image}?resize&sizes[]=480&format=webp`)" type="image/webp" media="(max-width: 639px)">
          <source  :srcset="require(`~/assets${image}?resize&sizes[]=680&format=webp`)" type="image/webp" media="(max-width: 767px )">
          <source  :srcset="require(`~/assets${image}?resize&sizes[]=860&format=webp`)" type="image/webp" media="(max-width: 1024px )"> 
          <source  :srcset="require(`~/assets${image}?resize&sizes[]=1024&format=webp`)" type="image/webp" media="(max-width: 1248px)"> 
          <source  :srcset="require(`~/assets${image}?resize&sizes[]=480`)" type="image/jpeg" media="(max-width: 639px )">
          <source  :srcset="require(`~/assets${image}?resize&sizes[]=680`)" type="image/jpeg" media="(max-width: 767px )">
          <source  :srcset="require(`~/assets${image}?resize&sizes[]=860`)" type="image/jpeg" media="(max-width: 1024px )">
          <source  :srcset="require(`~/assets${image}?resize&sizes[]=1024`)" type="image/jpeg" media="(max-width: 1248px)">
          <img     :srcset="require(`~/assets${image}`)" loading="lazy" :alt="alt" :class="imageClass">
        </picture>
</template>

<script>
export default {

  props:{
    image: {
      type: String,
      required: true
      },
    alt: {
      type: String,
      required: true,
      default: ''
    },
    imageClass: {
      type: String,
      default: ''
    }
  }

}
</script>

<style>

</style>