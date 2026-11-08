<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="site-header">
    <h1>Catwitter</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/signup">Sign up</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  width: 100%;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  background-color: #25283f;
}

h1 {
  color: white;
  margin-bottom: 15px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 25px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover,
nav a.router-link-active {
  color: #80c29d;
}
</style>
