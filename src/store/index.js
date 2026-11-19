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
            state.posts = posts;
        },
        // equiv:
    // setPostsAlt(state, posts) {
    //   state.posts = posts
    // }

      increaseLikeCount: (state, postId) => {
        // The find() method takes a function as an argument
        // and executes it for each element until the function
        // returns true. It then returns that element.
        const post = state.posts.find(function(post) {
          return post.id === postId
        });

        // console.log("found post: ", post)

        if (post) {
          post.likes += 1;
        }
        
      },
      resetLikes: state => {
        state.posts.forEach(post => {
          post.likes = 0;
        })
      }
        

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
    getPosts: act => {
        act.commit('setPosts', postsData)
    },


    increaseLikeCountAct: (act, postId) => {
        act.commit("increaseLikeCount", postId)
    },
    resetLikesAct: act => {
        act.commit("resetLikes")
    }

  },
  modules: {
  }
})
