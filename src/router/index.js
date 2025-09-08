import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../Views/AboutView.vue'
import CommitteesView from '../Views/CommitteesView.vue'
import HomeView from '../Views/HomeView.vue'
import MemberShipRegistration from '../Views/MemberShipRegistration.vue'
import MembersView from '../Views/MembersView.vue'


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
    {
      path: '/membership',
      name: 'membership',
      component: MembersView,
    },
    {
      path: '/committees',
      name: 'committees',
      component: CommitteesView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutUs,
    },
    {
      path: '/membership-registration',
      name: 'membership-registration',
      component: MemberShipRegistration,
    },
]
//   scrollBehavior (to, from, savedPosition) {
//     return { top: 0 };
//   }
})

export default router