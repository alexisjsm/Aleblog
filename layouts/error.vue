<template>
<div class="text-center font-bold text-3xl self-center">
  <h1 v-if="error.statusCode === 404">Pagina no encontrada :(</h1>
  <h1 v-else>Ha habido un error</h1>

</div>

  
</template>

<script>
export default {

  layout: 'index',

  props: {
    error: {
      type: Object,
      default: null
    }
  }

}
</script>

<style>

</style>