<template>
  <main class="main-container">
    <Posts />
    <button class="resetLikesButton" v-on:click="resetLikes">Reset likes</button>
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

<style scoped>
  .resetLikesButton{
    padding-bottom: 0.4em;
    padding-top: 0.4em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    font-size: large;
    border-radius:1cm
  }

  .resetLikesButton:hover {
    background-color: #90e1fb;
    /* padding: 0.8rem 2%; */
    border-top: 2px solid #ffffff;
    border-left: 2px solid #ffffff;
    border-right: 2px solid #808080;
    border-bottom: 2px solid #808080;
  }
</style>