<template>
<div>
    <picture>
      <source :srcset="require(`~/assets${images}?webp`)" type="image/webp">
      <source :srcset="require(`~/assets${images}?jpg`)" type="image/jpeg">
      <img :src="require(`~/assets${images}`)" :alt="alt">
    </picture>
</div>
</template>

<script>
export default {

  props:{
    images: {
      type: String,
      required: true
      },
    alt: {
      type: String,
      required: true
    }
  }

}
</script>

<style>

</style>