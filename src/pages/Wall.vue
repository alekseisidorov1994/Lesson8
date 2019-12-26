<template>
    <div class="container">
      <post
        v-for="post of data.posts"
        :key="post.id"
        :post="post"
      ></post>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
  props:['data'],
  name: 'app',
  components: {
    post:Post
  }
}
</script>