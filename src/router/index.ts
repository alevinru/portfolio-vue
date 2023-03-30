import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/PortfolioPage.vue'),
  },
  {
    path: '/gallery/:folder',
    name: 'Gallery',
    component: () => import('@/views/GalleryPage.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
