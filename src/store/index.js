import { createStore } from 'vuex'
import postsData from '@/assets/posts.json'

export default createStore({
  state: {
      posts: []
  },
  getters: {
  },
  mutations: {
    setPosts: (state, posts) => {
            state.posts = posts
        },
        // equiv:
    // setPostsAlt(state, posts) {
    //   state.posts = posts
    // }
    
  },
  actions: {
    // Fetching the data
    // fetchAlt(context) {
    //    fetch('http://localhost:3000/Posts')
    //       .then((response) => response.json())
    //       .then(data => act.commit('setPosts', data))
    //       .catch(err => console.log(err.message))
    // },
    // equiv:
    // fetchPosts: act => {
    //   fetch('http://localhost:3000/Posts')
    //       .then((response) => response.json())
    //       .then(data => act.commit('setPosts', data))
    //       .catch(err => console.log(err.message))
    // },
    // Using imported data
    fetchPosts: act => {
        act.commit('setPosts', postsData)
    }

  },
  modules: {
  }
})
