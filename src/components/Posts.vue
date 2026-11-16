<template>
  <div class="posts-container">
    <div v-for="(post, index) in posts" :key="index" class="post">
      <header>
        <span class="post-author">{{ post.user }}</span>
        <span class="post-date">{{ post.created }}</span>
      </header>
      
      <img v-if="post.image" :src="post.image" alt="Post image" class="post-image" />
      <p class="post-body">{{ post.message }}</p>
    </div>
  </div>
</template>

<script>
//import postsData from '@/assets/posts.json'

// export default {
//   name: 'PostsList',
//   data() {
//     return {
//       posts: postsData
//     }
//   }
// }

export default {
    name: 'PostsList',
    computed: {
        posts() {
            return this.$store.state.posts
        }
    },

    mounted() {
        this.$store.dispatch('fetchPosts')
    }
}
</script>