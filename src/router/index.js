import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
]
//   scrollBehavior (to, from, savedPosition) {
//     return { top: 0 };
//   }
})

export default router