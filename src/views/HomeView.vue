<template>
  <main class="main-container">
    <Posts />
    <button v-on:click="resetLikes">Reset likes</button>
  </main>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  name: 'HomeView',
  components: {
    Posts
  },
  methods: {
    resetLikes: function() {
      this.$store.dispatch("resetLikesAct")
    }
  }
  
}
</script>