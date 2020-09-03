<template>
  <div>
    <slot name="Date" :article="article">
          <p v-if="article.createdAt === article.updatedAt" class="text-sm"> <span class="font-bold">Publicado:</span> {{formatDate(article.createdAt)}}</p>
          <p v-else class="text-sm"> <span class="font-bold">Última actualización:</span> {{formatDate(article.updatedAt)}}</p>
    </slot>
</div>
</template>

<script>
export default {

  props: {
    article: {
      type: Object,
      required: true
    }
  },
   methods: {
   formatDate(date){
     const options = {year:'numeric',month:'long',day:'numeric'}
     return new Date(date).toLocaleDateString('es', options)
   },
 }

}
</script>

<style>

</style>