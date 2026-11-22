<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-layout">
    <AppHeader />

    <div class="page-content">
      <RouterView />
    </div>

    <AppFooter />
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
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
}
</style>