<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app-layout">
    <Header />

    <main class="page-content">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.page-content {
  width: 100%;
}
</style>
