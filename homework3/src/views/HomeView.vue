<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Post from "../components/Post.vue";

const store = useStore();

const posts = computed(() => store.state.posts);

onMounted(() => {
  store.dispatch("fetchPosts");
});

function resetLikes() {
  store.commit("resetLikes");
}
</script>

<template>
  <main>
    <h1>Catwitter</h1>

    <div class="posts">
      <Post v-for="post in posts" :key="post.id" :post-id="post.id" />
    </div>

    <button @click="resetLikes">Reset Likes</button>
  </main>
</template>
