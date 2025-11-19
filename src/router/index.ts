import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:department/:city',
      name: 'departments',
      component: () => import('../views/DepartamentView.vue'),
    },

    {
      path: '/:option',
      name: 'departmentsOptions',
      component: () => import('../views/DepartamentView.vue'),
    },

    {
      path: '/asesoramiento',
      name: 'asesoramiento',
      component: () => import('../views/AsesoramientoVue.vue'),
    },
  ],
})

export default router
