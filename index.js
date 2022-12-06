import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MakananView.vue'

const routes = [
  {
    path: '/',
    name: 'makanan',
    component: HomeView
  },
  {
    path: '/minuman',
    name: 'minuman',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MinumanView.vue')
  },
  {
    path: '/snack',
    name: 'snack',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SnackView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
