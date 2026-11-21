
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
