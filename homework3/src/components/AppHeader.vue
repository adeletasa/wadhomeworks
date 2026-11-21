<script setup>
</script>
<template>
  <header class="app-header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/signup">Sign up</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #80c29d;
  padding: 20px;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>