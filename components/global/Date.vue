<template>
<div class="flex flex-row mt-2">
  <p v-if="createdAt === updatedAt" class="font-base"> <span class="font-bold">Publicado:</span> {{formatDate(createdAt)}}</p>
  <p v-else class="font-base"> <span class="font-bold">Última actualización:</span> {{formatDate(updatedAt)}}</p>
</div>
</template>

<script>
export default {

  props: {
     createdAt:{
      type: String,
      required: true
    },
    updatedAt:{
      type: String,
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