import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // loads the About page only when it is visited
      component: () => import('../views/AboutView.vue'),
    },
    {
      // route for the signup page
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
  ],
})

export default router

