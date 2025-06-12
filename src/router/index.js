import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../Views/AboutView.vue'
import HomeView from '../Views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
]
//   scrollBehavior (to, from, savedPosition) {
//     return { top: 0 };
//   }
})

export default router