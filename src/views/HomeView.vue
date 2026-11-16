<template>
  <main class="main-container">
    <Posts />
  </main>
</template>

<script>
import Posts from '@/components/Posts.vue'

export default {
  name: 'HomeView',
  components: {
    Posts
  }
}
</script>