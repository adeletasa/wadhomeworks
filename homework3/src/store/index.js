
import { createStore } from 'vuex'

export default createStore({
    state: {
        posts: []
    },

    mutations: {
        setPosts(state, posts) {
            state.posts = posts.map(post => ({
                ...post,
                likes: 0
            }))
        },

        likePost(state, postId) {
            const post = state.posts.find(post => post.id === postId)
            if (post) {
                post.likes++
            }
        },

        resetLikes(state) {
            state.posts.forEach(post => {
                post.likes = 0
            })
        }
    },

    actions: {
        async fetchPosts({ commit }) {
            const response = await fetch('/posts.json')

            if (!response.ok) {
                throw new Error('Failed to load posts')
            }

            const posts = await response.json()
            commit('setPosts', posts)
        }
    }
})
