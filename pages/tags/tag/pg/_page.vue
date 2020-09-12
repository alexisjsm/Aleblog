<template>
<div class="flex flex-col">
  <div class="text-3xl font-bold divide-y divide-gray-500 mt-2">
    <h2>más artículos sobre: {{$route.params.tag}}</h2>
  <nuxt-child/>    
  </div>
  <articles :articles="articles" />
  <pagination :name="`tags-tag`" :pageName="`tags-tag-pg-page`" :prev="prev" :next="next"  :tag="$route.params.tag"/>
  </div>
</template>

<script>
export default {
  layout: 'index',
  async asyncData({$content, params }) {
    const postsByPages = +4
    const pgNumber = +params.page
    const prev = pgNumber - 1

    const articles = await $content('articles')
      .only(['title', 'description','tags','img','alt','slug','createdAt','updatedAt'])
      .sortBy('createdAt', 'desc')
      .where({'tags.name':{
       $containsAny: [params.tag ]
       }})
      .skip(postsByPages*(pgNumber-1))
      .limit(postsByPages)
      .fetch()
    
    const nextpostsByPages = await $content('articles')
      .only(['title', 'description', 'img', 'alt', 'slug', 'createdAt','updatedAt'])
      .sortBy('createdAt', 'desc')
      .where({'tags.name':{
       $containsAny: [params.tag ]
       }})
      .skip(postsByPages*(pgNumber))
      .limit(postsByPages)
      .fetch()

      let next = null 
    if (nextpostsByPages.length >= 1) {
       next = pgNumber + 1
    }
          
  return {
        articles,
        prev,
        next
      }
  }
}
</script>

<style>

</style>