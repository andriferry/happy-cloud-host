import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/Default.vue'
import Home from '@/views/Home.vue'
import Vps from '@/views/Vps.vue'
import Websites from '@/views/Websites.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          name: 'home',
          path: '/',
          component: Home
        },
        {
          name: 'vps',
          path: '/Vps',
          component: Vps
        },
        {
          name: 'websites',
          path: '/websites',
          component: Websites
        }
        
      ]
    }
  ]
})

export default router
