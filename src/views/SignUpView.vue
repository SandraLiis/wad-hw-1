<template>
  <main class="login-main">
    <div class="login-box">
      <h1>Sign Up</h1>
      <form class="login-form" @submit.prevent="handleSignup">
        <label for="email">Email</label>
        <input type="email" id="email" class="login-input" v-model="email" required />

        <label for="password">Password</label>
        <input type="password" id="password" class="login-input" v-model="password" required />

        <button type="submit" class="login-button">Signup</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSignup() {
      this.$router.push('/');
    }
  }
}
</script>