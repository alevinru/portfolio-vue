import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/PortfolioPage.vue'),
  },
  {
    path: '/ams',
    name: 'ams',
    component: () => import('@/views/GalleryPage.vue'),
    props: {
      folder: 'ams-2007',
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
