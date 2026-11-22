
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  postId: {
    type: [Number, String],
    required: true
  }
})

const store = useStore()

const post = computed(() =>
    store.state.posts.find(p => p.id === props.postId)
)

function likePost() {
  store.commit('likePost', props.postId)
}
</script>

<template>
  <article v-if="post" class="post">
    <div class="post-header">
      <strong>{{ post.author }}</strong>
      <span>{{ post.date }}</span>
    </div>

    <p>{{ post.text }}</p>

    <img
        v-if="post.image"
        :src="'/' + post.image"
        alt="Post image"
        class="post-image"
    />

    <button @click="likePost">
      ❤️ {{ post.likes }}
    </button>
  </article>
</template>

<style scoped>
.post {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  max-width: 600px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.post-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.post-header strong {
  font-size: 18px;
}

.post-header span {
  color: gray;
  font-size: 14px;
}

.post p {
  margin-bottom: 15px;
}

.post-image {
  display: block;
  max-width: 100%;
  width: auto;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin: 0 auto 15px;
}

.post button {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 15px;
  cursor: pointer;
}

.post button:hover {
  background-color: #ffe5e9;
}
</style>

