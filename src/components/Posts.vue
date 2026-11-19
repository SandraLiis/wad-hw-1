<template>
  <div class="posts-container">
    <div v-for="post in posts" :key="post.id" class="post">
      <header>
        <span>
          <span>👤</span>
          <span class="post-author">{{ post.user }}</span>
        </span>
        <span class="post-date">{{ post.created }}</span>
      </header>
      
      <img v-if="post.image" :src="post.image" alt="Post image" class="post-image" />
      <p class="post-body">{{ post.message }}</p>
      <div class="likes">
        <button class="thumb" v-on:click="increaseLikeCount(post.id)">👍</button>
        <span class="nr-of-likes">{{ post.likes }} likes</span>
      </div>
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
    methods: {
    increaseLikeCount: function(postId) {
      this.$store.dispatch("increaseLikeCountAct", postId)
    }
    },

    mounted() {
        this.$store.dispatch('getPosts')
    }
}
</script>

<style scoped>
  .thumb {
    font-size:x-large;
    border:none;
  }

  .thumb:hover {
    background-color: #90e1fb;
    /* padding: 0.8rem 2%; */
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-right: 2px solid #808080;
    border-bottom: 2px solid #808080;
  }

  .likes {
    display: flex;
    justify-content: space-between;
  }
</style>