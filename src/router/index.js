import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/plant/list',
    name: 'plant-list',
    component: () => import('@/views/PlantListView.vue')
  },
  {
    path: '/plant/:id',
    name: 'plant-detail',
    component: () => import('@/views/PlantDetailView.vue')
  },
  {
    path: '/plant/add',
    name: 'plant-add',
    component: () => import('@/views/PlantAddView.vue')
  },
  {
    path: '/diary',
    name: 'diary',
    component: () => import('@/views/DiaryView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
